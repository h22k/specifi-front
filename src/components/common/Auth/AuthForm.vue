<script setup>
import { useAuthFormStore } from '@/stores/authForm'
import BaseInputWithLabel from '@/components/base/BaseInputWithLabel.vue'

const authFormState = useAuthFormStore()

const props = defineProps({
  inputs: Array,
  form: Object,
  isRegister: {
    type: Boolean,
    default: true
  },
  authCallback: {
    type: Function
  },
  errors: {
    type: Object,
    default: null
  }
})

const submit = (event) => {
  props.authCallback(props.form)
  event.preventDefault()
}
</script>

<template>
  <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
      {{ isRegister ? 'Create an account' : 'Login' }}
    </h1>
    <form class="space-y-4 md:space-y-6" @submit="submit">
      <BaseInputWithLabel
        :key="index"
        v-for="(input, index) in inputs"
        :id="input.id"
        :type="input.type"
        :placeholder="input.placeholder"
        :label-text="input.labelText"
        :name="input.name"
        v-model="form[input.name]"
        :error="errors ? (errors[input.name] ? errors[input.name][0] : null) : null"
      />
      <button
        type="submit"
        class="w-full text-white bg-purple-900 hover:scale-105 transition-all focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        {{ isRegister ? 'Create an account' : 'Login' }}
      </button>
      <p class="text-sm font-light text-gray-500">
        {{ isRegister ? 'Already have an account?' : "Don't you have an account? " }}
        <a
          @click="authFormState.changeState()"
          class="font-medium hover:underline hover:cursor-pointer text-purple"
          >{{ isRegister ? 'Login here' : 'Register here' }}</a
        >
      </p>
    </form>
  </div>
</template>

<style scoped></style>
