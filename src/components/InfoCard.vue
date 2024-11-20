<template>
  <div class="border border-yellow-200 rounded-lg shadow-sm p-4 pt-0 bg-black">
    <div class="flex sticky top-0 items-center mb-4 pt-4 pb-4 bg-black">
      <div class="flex justify-center items-center w-10 h-10 rounded-full bg-yellow-300">
        <YukiSvg :type="icon as any" class="w-6 h-6 fill-black" />
      </div>
      <h2 class="ml-4 text-lg font-semibold text-white">{{ title }}</h2>
    </div>
    <div>
      <slot>
        <div class="flex flex-col gap-2">
          <div class="flex flex-row items-center gap-1" v-for="item in items" :key="item.img">
            <img
              class="w-16 h-16 rounded-full mr-4 object-cover object-top"
              :src="item.img"
              :alt="`Avatar of ${'name' in item ? item.name : item.title}`"
            />
            <div class="text-sm">
              <p class="text-white leading-none">
                {{ 'name' in item ? item.name : item.title }}
              </p>
            </div>
          </div>
        </div>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import YukiSvg from './YukiSvg.vue'
import type { Character, Film, Planet, Specie } from '@/types/common'

defineProps({
  title: {
    type: String,
    default: 'Default Title',
  },
  icon: {
    type: String,
    default: '⭐',
  },
  items: {
    type: Array as () => Character[] | Film[] | Planet[] | Specie[],
    default: () => [],
  },
  type: {
    type: String,
    default: 'default',
  },
})
</script>
