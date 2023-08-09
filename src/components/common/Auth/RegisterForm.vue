<script setup>

  import { ref } from 'vue'
  import { useRegisterState } from '@/stores/register'
  import AuthForm from '@/components/common/Auth/AuthForm.vue'

  const registerState = useRegisterState()

  const form = ref({
      email: '',
      name: '',
      password: '',
      password_again: '',
    })

  const inputs = [
      {
        id: 'name',
        placeholder: 'Name Surname',
        labelText: 'Name',
        name: 'name'
      },
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
      {
        type: 'password',
        id: 'password_confirmation',
        placeholder: 'Password Confirm',
        labelText: 'Password Confirm',
        name: 'password_confirmation'
      },
  ]
</script>

<template>
  <AuthForm :inputs="inputs" :form="form" :auth-callback="registerState.register" :errors="registerState.errors"/>
</template>

<style scoped>

</style>
