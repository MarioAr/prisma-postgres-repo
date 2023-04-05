import { PrismaClient } from '@prisma/client'
import { CustomPrismaClient } from './IPC'



const prisma: CustomPrismaClient = new PrismaClient()

export default prisma
