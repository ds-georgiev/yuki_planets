<template>
  <PopupDialog :is-visible="openPopup" @close="openPopup = false">
    <div class="flex flex-wrap md:flex-nowrap gap-3">
      <div class="w-full md:w-1/2 lg:flex">
        <img class="w-auto object-cover max-h-56 m-auto" :src="planet.img" :alt="planet.name" />
        <div class="w-full p-4 flex flex-row justify-between leading-normal">
          <div class="w-full">
            <p class="text-yellow-400 font-bold text-xl mb-2">{{ planet.name }}</p>
            <div class="flex flex-col gap-2">
              <IconText :value="planet.climate" text="Climate" icon="climate" />
              <IconText :value="planet.gravity" text="Gravity" icon="gravity" />
              <IconText :value="planet.terrain" text="Terrain" icon="terrain" />
              <IconText :value="planet.surface_water" text="Surface Water" icon="water" />
              <IconText :value="planet.population" text="Population" icon="population" />
            </div>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/2 lg:flex">
        <div class="w-full p-4 block justify-between leading-normal">
          <div class="flex gap-3 w-full h-full items-center justify-center">
            <PlanetCardInfo
              icon="diameter"
              :value="planet.diameter"
              property="Diameter"
              class="max-w-1/3"
            />
            <PlanetCardInfo
              icon="rotation"
              :value="planet.rotation_period"
              property="Rotation Period"
              class="max-w-1/3"
            />
            <PlanetCardInfo
              icon="orbital"
              :value="planet.orbital_period"
              property="Orbital Period"
              class="max-w-1/3"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap md:flex-nowrap gap-3 mt-4 w-full">
      <InfoCard
        v-if="planet.filmsData"
        title="Films"
        icon="film"
        :items="planet.filmsData"
        type="film"
        class="w-full md:w-1/2 max-h-96 overflow-y-auto"
      />
      <InfoCard
        v-if="planet.residentsData"
        title="Residents"
        icon="residents"
        :items="planet.residentsData"
        class="w-full md:w-1/2 max-h-96 overflow-y-auto"
      />
    </div>
  </PopupDialog>
</template>

<script setup lang="ts">
import type { Planet } from '@/types/common'
import { ref, watch } from 'vue'
import IconText from './IconText.vue'
import PopupDialog from './PopupDialog.vue'
import InfoCard from './InfoCard.vue'
import PlanetCardInfo from './PlanetCardInfo.vue'

const props = defineProps({
  isVisible: {
    type: Boolean,
    required: true,
    default: false,
  },
  planet: {
    type: Object as () => Planet,
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
