import { ZodIssue } from "zod";
import { ApiKey } from ".prisma/client";
import { Method } from "axios";

export interface CreateApiData {
  error: string | ZodIssue[] | null;
  createdApiKey: ApiKey | null;
}

export interface RevokeApiData {
  error: string | ZodIssue[] | null;
  success: boolean;
}

declare module "next" {
  interface NextApiRequest {
    method: Method;
  }
}
