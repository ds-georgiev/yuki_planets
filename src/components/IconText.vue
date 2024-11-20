<template>
  <div class="group flex flex-row gap-3 justify-left items-center text-left relative text-white">
    <YukiSvg :type="icon as any" class="w-4 h-4 fill-yellow-400" />
    <p class="text-sm max-w-fit text-ellipsis line-clamp-1">
      <strong>{{ text }}:</strong>
    </p>
    <p class="text-sm max-w-fit text-ellipsis">{{ formatterValue }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'
import YukiSvg from './YukiSvg.vue'

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
})

const formatterValue = computed(() => {
  return props.value === 'unknown' ? 'N/A' : props.value
})
</script>
