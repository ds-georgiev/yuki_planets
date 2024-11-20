<template>
  <div
    v-if="isVisible"
    class="fixed inset-0 bg-gray-900 bg-opacity-50 md:flex justify-center items-center z-50 md:p-24 p-4 overflow-y-auto"
    @click.self="close()"
  >
    <div class="bg-black rounded shadow-lg relative p-6 flex-1 max-w-7xl border border-yellow-300">
      <button
        class="absolute top-2 right-2 text-gray-400 hover:text-gray-100"
        @click="close()"
        aria-label="Close"
      >
        ✕
      </button>
      <slot></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps, defineEmits, watch, ref } from 'vue'

const props = defineProps({
  isVisible: {
    type: Boolean,
    required: true,
  },
})
const hideBodyScroll = ref(props.isVisible)
const emit = defineEmits(['close'])

function close() {
  hideBodyScroll.value = false
  setTimeout(() => {
    emit('close')
  }, 100)
}

watch(
  () => hideBodyScroll.value,
  (newVal) => {
    console.log('🚀 ~ newVal:', newVal)
    if (newVal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  },
  { immediate: true, deep: true },
)
</script>
