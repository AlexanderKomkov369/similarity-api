import { ZodIssue } from "zod";
import { ApiKey } from ".prisma/client";
import { Method } from "axios";
import { INTERNAL_SERVER_ERROR, UNAUTHORIZED } from "@/constants/errors";

export interface CreateApiData {
  error: string | ZodIssue[] | null;
  createdApiKey: ApiKey | null;
}

export interface RevokeApiData {
  error: string | ZodIssue[] | null;
  success: boolean;
}

export type SimilarityApiData =
  | {
      success: true;
      text1: string;
      text2: string;
      similarity: number;
    }
  | {
      error: INTERNAL_SERVER_ERROR | UNAUTHORIZED;
    };

declare module "next" {
  interface NextApiRequest {
    method: Method;
  }
}
