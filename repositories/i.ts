import { PrismaClient } from '@prisma/client'

interface CustomPrismaClient extends PrismaClient {
  [key: string]: any
}

// const prisma: CustomPrismaClient = new PrismaClient()

// Ahora puedes acceder a las propiedades del objeto PrismaClient utilizando cadenas como claves
// const users = await prisma.user.findMany()
