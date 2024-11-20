<template>
  <div class="p-1 md:w-1/4 sm:w-1/2 min-w-fit">
    <div
      class="border border-yellow-400 px-3 py-3 rounded-lg transform transition duration-200 ease-in-out hover:scale-110"
    >
      <YukiSvg :type="icon as any" class="w-5 h-5 fill-yellow-300" />

      <h2 class="title-font font-medium text-2xl text-white">{{ formatterValue }}</h2>
      <p class="leading-relaxed text-gray-200">{{ property }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'
import YukiSvg from './YukiSvg.vue'

const props = defineProps({
  icon: {
    type: String,
    default: 'Default Title',
  },
  property: {
    type: String,
    default: '',
  },
  value: {
    type: String,
    default: '',
  },
})

const formatterValue = computed(() => {
  return props.value === 'unknown' ? 'N/A' : props.value
})
</script>
