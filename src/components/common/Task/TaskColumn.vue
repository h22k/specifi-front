<script setup>

  import TaskCards from '@/components/common/Task/TaskCards.vue';

  defineProps({
    text: {
      type: String,
    },
    tasks: Array
  })

</script>

<template>
  <div class="project-column flex flex-col gap-y-6">
    <div class="project-column-heading">
      <h2 class="text-lg">{{ text }}</h2>
      <button class="project-column-heading__options">
        ...
      </button>
    </div>
    <TaskCards :tasks="tasks" />
  </div>
</template>

<style scoped>

</style>
