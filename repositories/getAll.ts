import UserRepository from './UserRepository'

export async function getAllUsers() {
  const userRepository = new UserRepository()
  return userRepository.findMany()
}
