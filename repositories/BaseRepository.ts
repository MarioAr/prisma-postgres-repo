import prisma from './database'

abstract class BaseRepository<T> {
  private readonly modelName: string

  constructor(modelName: string) {
    this.modelName = modelName
  }

  async findMany(): Promise<T[]> {
    
    return prisma[this.modelName].findMany()
  }

  async findOne(where: any): Promise<T | null> {
    return prisma[this.modelName].findOne({ where })
  }

  async create(data: object): Promise<T> {
    return prisma[this.modelName].create({ data })
  }

  async update(where: any, data: any): Promise<T> {
    prisma
    return prisma[this.modelName].update({ where, data })
  }

  async delete(where: any): Promise<T> {
    return prisma[this.modelName].delete({ where })
  }
}

export default BaseRepository
