<script setup>
  import RegisterForm from '@/components/common/Auth/RegisterForm.vue'
  import LoginForm from '@/components/common/Auth/LoginForm.vue'
  import { useAuthFormStore } from '@/stores/authForm'

  const authFormState = useAuthFormStore()

</script>

<template>
  <div class="app flex items-center justify-center">
    <div
        class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0"
    >
      <LoginForm v-if="authFormState.getIsLogin"/>
      <RegisterForm v-else/>
    </div>
  </div>
</template>
