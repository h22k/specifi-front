import { useUserState } from '@/stores/user';

export const isGuest =  async (to, from, next) => {
  const userState = useUserState()
  try {
    await userState.getUserFromApi()
  } catch (e) {
    return next()
  }

  if (userState.user) {
    return next({name: 'tasks'})
  }

  next()
}
