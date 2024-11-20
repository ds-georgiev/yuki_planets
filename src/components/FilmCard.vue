<template>
  <div
    class="overflow-hidden shadow-lg border rounded border-yellow-300"
    @click="$emit('popupopen', localFilm)"
  >
    <img class="w-full" :src="film.img" :alt="film.title" />
    <div class="px-6 py-4 text-white">
      <p class="text-xl mb-2">
        <strong>{{ film.title }}</strong>
      </p>
      <p class="text-base">
        {{ film.opening_crawl }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePlanetsStore } from '@/stores/planets'
import { useSpeciesStore } from '@/stores/species'
import { useCharacterStore } from '@/stores/characters'
import { defineProps, onMounted } from 'vue'
import { ref } from 'vue'
import type { Film } from '@/types/common'

const props = defineProps({
  film: {
    type: Object as () => Film,
    required: true,
  },
})

const planetsStore = usePlanetsStore()
const speciesStore = useSpeciesStore()
const characterStore = useCharacterStore()
const localFilm = ref({ ...props.film })

function getPlanets() {
  props.film.planets.forEach(async (planet) => {
    const panetId = planet.split('/').slice(-2)[0]

    await planetsStore.fetchPlanetById(Number(panetId)).then((planet) => {
      if (planet) {
        if (!localFilm.value.planetsData) {
          localFilm.value.planetsData = []
        }
        localFilm.value.planetsData?.push(planet)
      }
    })
  })
}

function getSpecies() {
  props.film.species.forEach(async (specie) => {
    const specieId = specie.split('/').slice(-2)[0]

    await speciesStore.fetchSpecieById(Number(specieId)).then((specie) => {
      if (specie) {
        if (!localFilm.value.speciesData) {
          localFilm.value.speciesData = []
        }
        localFilm.value.speciesData?.push(specie)
      }
    })
  })
}
function getCharacters() {
  props.film.characters.forEach(async (character) => {
    const characterId = character.split('/').slice(-2)[0]

    await characterStore.fetchCharacterById(Number(characterId)).then((character) => {
      if (character) {
        if (!localFilm.value.charactersData) {
          localFilm.value.charactersData = []
        }
        localFilm.value.charactersData?.push(character)
      }
    })
  })
}

onMounted(async () => {
  await getPlanets()
  await getSpecies()
  await getCharacters()
})
</script>
