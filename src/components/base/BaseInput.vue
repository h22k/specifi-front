<script setup>

  import { computed } from 'vue';

  const props = defineProps({
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String
    },
    placeholder: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: ''
    },
    className: {
      type: String,
      default: 'bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 focus:outline-none'
    },
    modelValue: {
      default: null
    },
    required: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    labelText: {
      type: String
    },
    error: {
      type: String,
      default: null
    }
  })

  const emit = defineEmits(['update:modelValue'])

  const value = computed({
    get() {
      return props.modelValue
    },
    set(value) {
      emit('update:modelValue', value)
    }
  })


</script>

<template>
    <input :type="type" :placeholder="placeholder"
           :id="id" :class="[className + (error ? ' border-red-500' : '')]" v-model="value"
           @input="$emit('update:modelValue', $event.target.value)" :required="required"
           :disabled="disabled"
           :name="name"
    >
</template>

<style scoped>

</style>
