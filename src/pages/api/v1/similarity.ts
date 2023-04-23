import { withMethods } from "@/lib/api-middlewares/with-methods";
import { z } from "zod";
import { NextApiRequest, NextApiResponse } from "next";
import { INTERNAL_SERVER_ERROR, UNAUTHORIZED } from "@/constants/errors";
import { db } from "@/lib/db";
import { openai } from "@/lib/openai";
import { cosineSimilarity } from "@/helpers/cosine-similarity";
import { SimilarityApiData } from "@/types/api";

const reqSchema = z.object({
  text1: z.string().max(1000),
  text2: z.string().max(1000),
});

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<SimilarityApiData>
) => {
  const body = req.body as unknown;

  const apiKey = req.headers.authorization;
  if (!apiKey) {
    return res.status(401).json({ error: UNAUTHORIZED });
  }

  try {
    const { text1, text2 } = reqSchema.parse(body);

    const validApiKey = await db.apiKey.findFirst({
      where: {
        key: apiKey,
        enabled: true,
      },
    });

    if (!validApiKey) {
      return res.status(401).json({
        error: UNAUTHORIZED,
      });
    }

    const start = new Date();

    const embeddings = await Promise.all(
      [text1, text2].map(async (text) => {
        const res = await openai.createEmbedding({
          model: "text-embedding-ada-002",
          input: text,
        });

        return res.data.data[0].embedding;
      })
    );

    const similarity = cosineSimilarity(embeddings[0], embeddings[1]);

    const duration = new Date().getTime() - start.getTime();

    // persist request
    await db.apiRequest.create({
      data: {
        duration,
        method: req.method,
        path: req.url!,
        status: 200,
        apiKeyId: validApiKey.id,
        usedApiKey: validApiKey.key,
      },
    });

    return res.status(200).json({
      success: true,
      text1,
      text2,
      similarity,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        error: error.issues,
      });
    }

    return res.status(500).json({ error: INTERNAL_SERVER_ERROR });
  }
};

export default withMethods(["POST"], handler);
