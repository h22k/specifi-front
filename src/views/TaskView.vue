<script setup>

  import { useTaskState } from '@/stores/task'
  import { onMounted, ref } from 'vue';
  import TaskColumn from '@/components/common/Task/TaskColumn.vue';
  import BaseInput from '@/components/base/BaseInput.vue';
  import { useUserState } from '@/stores/user';

  const taskState = useTaskState()
  const userState = useUserState()

  onMounted(() => {
    taskState.getTasksFromSource()
  })

  const columns = [
    {
      text: 'Todo',
      taskGroupCallbackName: 'getTodoTasks'
    },
    {
      text: 'In progress',
      taskGroupCallbackName: 'getInProgressTasks'
    },
    {
      text: 'Need Review',
      taskGroupCallbackName: 'getNeedReviewTasks'
    },
    {
      text: 'Done',
      taskGroupCallbackName: 'getDoneTasks'
    },
  ]

  const search = ref('')

  const submitSearch = (event) => {

    taskState.getTasksFromSource(search.value)

    event.preventDefault()
  }

  const logout = event => {

    userState.logout()

    event.preventDefault()
  }

</script>

<template>
  <div class="app">
    <main class="container mx-auto px-6">
      <div class="project-info gap-3 items-center justify-center">
        <form class='flex gap-3 w-3/4 items-center justify-center' @submit="submitSearch">
          <BaseInput :required="false" :disabled="taskState.loading" placeholder="Search.." v-model="search" class-name="px-3 py-1 rounded-md w-full" />
        </form>
        <div>
          <button class='rounded-full p-2 bg-gray-700 text-white' @click="logout">
            Logout
          </button>
        </div>
      </div>
      <div class="project-tasks gap-y-6">
        <TaskColumn :text="taskState.loading ? `${column.text} - Loading` : column.text" v-for="(column, key) in columns" :key="key" :tasks="taskState[column.taskGroupCallbackName]" />
      </div>
      <br />
    </main>
  </div>
</template>

<style scoped>

</style>
