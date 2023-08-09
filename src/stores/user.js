import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import client from '@/client/client';
import router from '@/router';

export const useUserState = defineStore('user', () => {
  const user = ref(null)

  const getUser = computed(() => user.value)

  async function sendAuthRequest(formData, url) {
    await client.get('sanctum/csrf-cookie')
    await client.post(url, formData)

    await getUserFromApi()

    await router.push({ name: 'tasks' })
  }

  async function logout() {
    await client.post('logout')

    setUser(null)

    await router.push({name: 'home'})
  }

  async function getUserFromApi() {
    const { data } = await client.get('api/user')

    setUser(data)
  }

  function setUser(loggedUser) {
    user.value = loggedUser
  }

  return { user, getUser, sendAuthRequest, getUserFromApi, logout }
})
