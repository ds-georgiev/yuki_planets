<template>
  <PopupDialog :is-visible="openPopup" @close="openPopup = false">
    <div class="flex flex-wrap md:flex-nowrap gap-3">
      <div class="w-full md:w-1/3 lg:flex">
        <img
          class="w-auto object-cover max-h-56 rounded-l-lg m-auto"
          :src="film.img"
          :alt="film.title"
        />
        <div class="w-full bg-black p-4 flex flex-row justify-between leading-normal">
          <div class="w-full text-left text-white">
            <p class="text-xl mb-2">
              <strong>{{ film.title }}</strong>
            </p>
            <div>
              <p><strong>Date Created:</strong> {{ film.release_date }}</p>
              <p><strong>Director:</strong> {{ film.director }}</p>
              <p><strong>Producer(s):</strong> {{ film.producer }}</p>
              <p><strong>Episode ID:</strong> {{ film.episode_id }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full md:w-2/3 lg:flex">
        <div class="w-full text-lef bg-black p-4 justify-between leading-normal text-white">
          <p class="mb-3"><strong>Opening Crawl:</strong></p>
          <p>{{ film.opening_crawl }}</p>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap md:flex-nowrap gap-3 mt-4 w-full">
      <InfoCard
        title="Planets"
        icon="orbital"
        :items="film.planetsData"
        class="w-full md:w-1/3 max-h-96 overflow-y-auto"
      />
      <InfoCard
        title="Characters"
        icon="population"
        :items="film.charactersData"
        class="w-full md:w-1/3 max-h-96 overflow-y-auto"
      />

      <InfoCard
        title="Species"
        icon="species"
        :items="film.speciesData"
        class="w-full md:w-1/3 max-h-96 overflow-y-auto"
      />
    </div>
  </PopupDialog>
</template>

<script setup lang="ts">
import type { Film } from '@/types/common'
import { ref, watch } from 'vue'
import PopupDialog from './PopupDialog.vue'
import InfoCard from './InfoCard.vue'

const props = defineProps({
  isVisible: {
    type: Boolean,
    required: true,
    default: false,
  },
  film: {
    type: Object as () => Film,
    required: true,
  },
})

const openPopup = ref(props.isVisible)

watch(
  () => props.isVisible,
  (newVal) => {
    openPopup.value = newVal
  },
  { immediate: true, deep: true },
)
</script>
