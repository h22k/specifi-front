<script setup>

  import TaskCard from '@/components/common/Task/TaskCard.vue';

  defineProps({
    tasks: Array
  })

</script>

<template>
  <div v-for="(task, key) in tasks" :key="key" class="task">
    <TaskCard :task="task"/>
  </div>
</template>

<style scoped>

</style>
