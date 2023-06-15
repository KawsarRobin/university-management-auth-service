import config from '../../../config/index'
import { IUser } from './users.interface'
import { User } from './users.model'
import { generateUserId } from './users.utils'

const createUser = async (user: IUser): Promise<IUser | null> => {
  //auto generated incremental Id
  const id = await generateUserId()
  //default password
  user.id = id
  if (!user.password) {
    user.password = config.default_user_pass as string
  }
  console.log(user)
  const createdUser = await User.create(user)
  if (!createUser) {
    throw new Error('failed to create user!')
  }
  return createdUser
}

export default {
  createUser,
}
