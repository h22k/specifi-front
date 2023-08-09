import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAuthFormStore = defineStore('authForm', () => {
  const isLogin = ref(false)

  const getIsLogin = computed(() => isLogin.value)
  function changeState() {
    isLogin.value = !(isLogin.value)
  }

  return { getIsLogin, changeState }
})
