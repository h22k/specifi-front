<script setup>

  defineProps({
    task: Object
  })

</script>

<template>
  <div class="task__tags">
              <span class="task__tag task__tag--copyright">{{ task.category.name }}</span
              ><button class="task__options">
    <i class="fas fa-ellipsis-h"></i>
  </button>
  </div>
  <br />
  <h2 class='font-semibold text-lg'>{{ task.title }}</h2>
  <p>{{ task.description }}</p>
</template>

<style scoped>

</style>
