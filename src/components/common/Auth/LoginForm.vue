<script setup>

  import { ref } from 'vue'
  import AuthForm from '@/components/common/Auth/AuthForm.vue'
  import { useLoginState } from '@/stores/login';

  const loginState = useLoginState()

  const form = ref({
    email: '',
    password: '',
  })

  const inputs = [
    {
      type: 'email',
      id: 'email',
      placeholder: 'name@company.com',
      labelText: 'Email',
      name: 'email'
    },
    {
      type: 'password',
      id: 'password',
      placeholder: 'Password',
      labelText: 'Password',
      name: 'password'
    },
  ]
</script>

<template>
  <AuthForm :inputs="inputs" :form="form" :errors="loginState.errors" :is-register="false" :auth-callback="loginState.login"/>
</template>

<style scoped>

</style>
