<template>
  <div class="p-1 md:w-1/4 w-full min-w-fit">
    <div
      class="px-3 py-3 rounded-lg transform transition duration-200 ease-in-out hover:scale-110 d-flex flex-col justify-items-center"
    >
      <YukiSvg :type="icon as any" class="w-6 h-6 md:w-12 md:h-12 fill-yellow-300 mb-2" />

      <h2 class="title-font font-medium text-base md:text-2xl text-white">{{ formatterValue }}</h2>
      <p class="leading-relaxed text-xs md:text-base text-gray-300">{{ property }}</p>
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
