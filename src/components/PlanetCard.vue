<template>
  <div class="flex flex-col border-yellow-300 border rounded-md">
    <div class="w-full p-1">
      <p class="text-center text-xl text-yellow-300">
        <strong>{{ planet.name }}</strong>
      </p>
    </div>
    <div class="flex">
      <img
        class="w-auto m-auto aspect-square object-cover max-h-56"
        :src="planet.img"
        :alt="planet.name"
        @error="handleImageError()"
      />
      <div class="max-h-56 w-full p-4 flex-row justify-between leading-normal hidden md:flex">
        <div class="w-full">
          <div class="flex w-full h-full items-center justify-center">
            <InfoCardSmall
              icon="diameter"
              :value="planet.diameter"
              property="Diameter"
              class="max-w-1/3"
            />
            <InfoCardSmall
              icon="rotation"
              :value="planet.rotation_period"
              property="Rotation Period"
              class="max-w-1/3"
            />
            <InfoCardSmall
              icon="orbital"
              :value="planet.orbital_period"
              property="Orbital Period"
              class="max-w-1/3"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="w-full">
      <button
        class="flex w-full items-center gap-3 justify-center py-2 px-4 text-center text-sm text-yellow-300 transition-all shadow-sm hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
        @click="$emit('popupopen', localPlanet)"
      >
        <YukiSvg type="info" class="w-5 h-5 fill-yellow-300" />
        Extra info
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Character, Film, Planet } from '@/types/common'
import { onMounted, ref, watch } from 'vue'
import { useFilmsStore } from '@/stores/films'
import YukiSvg from './YukiSvg.vue'
import { useCharacterStore } from '@/stores/characters'
import InfoCardSmall from './InfoCardSmall.vue'

const props = defineProps({
  planet: {
    type: Object as () => Planet,
    required: true,
  },
})

const filmStore = useFilmsStore()
const characterStore = useCharacterStore()
const residents = ref([] as Character[])
const films = ref([] as Film[])

const localPlanet = ref({ ...props.planet })

const handleImageError = () => {
  localPlanet.value.img = '/images/no_image.jpg'
}

function setPlanetFilms() {
  localPlanet.value.films.forEach(async (film) => {
    const filmId = film.split('/').slice(-2)[0]

    await filmStore.fetchFilmById(Number(filmId)).then((film) => {
      if (film) {
        films.value.push(film)
        if (!localPlanet.value.filmsData) {
          localPlanet.value.filmsData = []
        }
        localPlanet.value.filmsData?.push(film)
      }
    })
  })
}
function setPlanetResidents() {
  localPlanet.value.residents.forEach(async (resident) => {
    const residentId = resident.split('/').slice(-2)[0]

    await characterStore.fetchCharacterById(Number(residentId)).then((resident) => {
      if (resident) {
        residents.value.push(resident)
        if (!localPlanet.value.residentsData) {
          localPlanet.value.residentsData = []
        }
        localPlanet.value.residentsData?.push(resident)
      }
    })
  })
}

watch(
  () => props.planet,
  (newPlanet) => {
    localPlanet.value = { ...newPlanet }
  },
  { deep: true },
)

onMounted(async () => {
  await setPlanetFilms()
  await setPlanetResidents()
})

watch(
  () => props.planet.name,
  async () => {
    films.value = []
    residents.value = []
    await setPlanetFilms()
    await setPlanetResidents()
  },
  { deep: true },
)
</script>
