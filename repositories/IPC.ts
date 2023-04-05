import { PrismaClient } from "@prisma/client";

export interface CustomPrismaClient extends PrismaClient {
    [key: string]: any
  }
  