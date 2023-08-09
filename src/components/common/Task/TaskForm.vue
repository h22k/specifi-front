<script setup>
import BaseInputWithLabel from '@/components/base/BaseInputWithLabel.vue'

const props = defineProps({
  inputs: Array,
  form: Object,
  isCreation: {
    type: Boolean,
    default: true
  },
  taskCallback: {
    type: Function
  },
  errors: {
    type: Object,
    default: null
  }
})

const submit = (event) => {
  props.taskCallback(props.form)
  event.preventDefault()
}
</script>

<template>
  <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
      {{ isCreation ? 'Create a task' : 'Update Task' }}
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
        {{ isCreation ? 'Create a task' : 'Update Task' }}
      </button>
    </form>
  </div>
</template>

<style scoped></style>
