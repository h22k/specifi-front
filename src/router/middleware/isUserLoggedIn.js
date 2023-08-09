import { useUserState } from '@/stores/user';

export const isUserLoggedIn =  async (to, from, next) => {
  const userState = useUserState()
  const user = userState.user


  if (!user) {
    try {
      await userState.getUserFromApi()
    } catch (e) {
      return next({name: 'home'})
    }
  }

  next()
}
