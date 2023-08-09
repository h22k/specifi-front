import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import client from '@/client/client';

export const useUserState = defineStore('user', () => {
  const user = ref(null)

  const getUser = computed(() => user.value)

  async function sendAuthRequest(formData, url) {
    await client.get('sanctum/csrf-cookie')
    await client.post(url, formData)

    const { data } = await client.get('api/user')

    setUser(data)
  }

  function setUser(loggedUser) {
    user.value = loggedUser
  }

  return { user, getUser, sendAuthRequest }
})
