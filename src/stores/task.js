import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import apiClient from '@/client/apiClient';

export const useTaskState = defineStore('task', () => {
  const taskKeys = [
    {
      methodName: 'toDo',
      progressName: 'to_do'
    },
    {
      methodName: 'inProgress',
      progressName: 'in_progress'
    },
    {
      methodName: 'needReview',
      progressName: 'need_review'
    },
    {
      methodName: 'done',
      progressName: 'done'
    },
  ]

  const tasks = ref({
    toDo: [],
    inProgress: [],
    needReview: [],
    done: []
  })

  const loading = ref(false)

  const getTodoTasks = computed(() => tasks.value.toDo)
  const getInProgressTasks = computed(() => tasks.value.inProgress)
  const getNeedReviewTasks = computed(() => tasks.value.needReview)
  const getDoneTasks = computed(() => tasks.value.done)

  async function getTasksFromSource(search = null) {
    resetTasks()
    try {
      loading.value = true
      let isThereNextPage = true
      let page = 1
      do {
        const { data } = await apiClient.get('tasks', {
          params: {
            page,
            search
          }
        })
        const response = data.data
        setTasksByGroup(response.data)
        page++
        isThereNextPage = response.next_page_url !== null
      } while (isThereNextPage)
    } catch (e) {
      alert(e.message)
    } finally {
      loading.value = false
    }
  }

  function resetTasks() {
    taskKeys.forEach(taskKey => {
      tasks.value[taskKey.methodName] = []
    })
  }

  function setTasksByGroup(data) {
    taskKeys.forEach(taskKey => {
      tasks.value[taskKey.methodName].push(...data.filter(task => task.progress === taskKey.progressName))
    })

  }

  return { getTodoTasks, getInProgressTasks, getNeedReviewTasks, getDoneTasks, getTasksFromSource, loading }
})
