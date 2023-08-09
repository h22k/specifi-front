import { ref } from 'vue'
import { defineStore } from 'pinia'
import { AxiosError } from 'axios';
import { useUserState } from '@/stores/user';

export const useLoginState = defineStore('login', () => {
  const loading = ref(false)
  const errors = ref(null)
  const userState = useUserState()
  async function login(data) {

    try {
      loading.value = true
      errors.value = null
      await userState.sendAuthRequest(data, 'login')
    } catch (e) {
      if (e instanceof AxiosError) {
        errors.value = e.response.data.errors
      }
    } finally {
      loading.value = false
    }
  }

  return { loading, errors, login }
})
