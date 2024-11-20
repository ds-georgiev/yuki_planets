<template>
  <div v-html="iconComponent" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Icons } from '../utils/icons'

const props = defineProps<{
  type: keyof typeof Icons
}>()

const iconComponent = computed(() => Icons[props.type])
</script>
