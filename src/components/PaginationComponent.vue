<template>
  <nav class="flex justify-center mt-4 max-w-full" aria-label="Pagination">
    <ul class="inline-flex items-center space-x-1 max-w-full">
      <li>
        <button
          :disabled="currentPage === 1"
          @click="goToPage(currentPage - 1)"
          class="px-4 py-2 text-gray-200 rounded hover:bg-yellow-300 hover:text-black disabled:opacity-50 text-xs md:text-base"
        >
          Previous
        </button>
      </li>

      <li v-for="page in totalPages" :key="page">
        <button
          @click="goToPage(page)"
          :class="[
            'px-4 py-2 rounded text-xs md:text-base',
            page === currentPage
              ? 'bg-yellow-500 text-black'
              : 'bg-black-200 text-white hover:bg-yellow-300 hover:text-black',
          ]"
        >
          {{ page }}
        </button>
      </li>

      <li>
        <button
          :disabled="currentPage === totalPages"
          @click="goToPage(currentPage + 1)"
          class="px-4 py-2 text-gray-200 rounded hover:bg-yellow-300 hover:text-black disabled:opacity-50 text-xs md:text-base"
        >
          Next
        </button>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts" name="PaginationComponent">
import { ref, defineProps, defineEmits } from 'vue'

const props = defineProps({
  totalPages: {
    type: Number,
    required: true,
  },
  modelValue: {
    type: Number,
    required: true,
  },
})

const emit = defineEmits(['update:modelValue'])

const currentPage = ref(props.modelValue)

const goToPage = (page: number) => {
  if (page >= 1 && page <= props.totalPages) {
    currentPage.value = page
    emit('update:modelValue', page)
  }
}
</script>
