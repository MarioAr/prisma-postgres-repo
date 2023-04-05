import BaseRepository from './BaseRepository'
import { User } from '@prisma/client'

export class UserRepository extends BaseRepository<User> {
  constructor() {
    super('user')
  }
}

export default UserRepository
