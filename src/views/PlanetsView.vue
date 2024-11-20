<template>
  <Suspense>
    <div class="flex items-center justify-center flex-col p-4">
      <PageHeading title="Star Wars planets information" highlight="planets" />

      <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 min-w-full">
        <PlanetCard
          class="w-full"
          v-for="planet in planets"
          :planet="planet"
          @popupopen="openPopup($event)"
          :key="planet.url"
        />
      </div>

      <PaginationComponent v-model="currentPage" :totalPages="planetsStore.pagesCount" />
      <PlanetPopup
        v-if="isPopupVisible"
        :isVisible="isPopupVisible"
        :planet="currentPlanet"
        @close="isPopupVisible = false"
      />
    </div>
  </Suspense>
</template>

<script setup lang="ts">
import { usePlanetsStore } from '@/stores/planets'
import type { Planet } from '@/types/common'
import { computed, ref, watch } from 'vue'
import PaginationComponent from '@/components/PaginationComponent.vue'
import PageHeading from '@/components/PageHeading.vue'
import PlanetCard from '@/components/PlanetCard.vue'
import PlanetPopup from '@/components/PlanetPopup.vue'

const planetsStore = usePlanetsStore()
const currentPage = ref(1)
const currentPlanet = ref({} as Planet)

const planets = computed(() => planetsStore.planets)

const isPopupVisible = ref(false)

function openPopup(planet: Planet) {
  currentPlanet.value = planet
  isPopupVisible.value = true
}

watch(
  () => currentPage,
  (newPage) => {
    planetsStore.fetchPlanets(newPage.value)
  },
  { immediate: true, deep: true },
)
</script>
