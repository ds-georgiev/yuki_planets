<template>
  <Suspense>
    <div class="w-full flex items-center justify-center p-4">
      <div class="text-center">
        <PageHeading title="Star Wars films information" highlight="films" />

        <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          <div v-for="film in filmsStore.films" :key="film.url">
            <FilmCard :film="film" @popupopen="openPopup($event)" />
          </div>
        </div>
      </div>
      <FilmPopup
        v-if="isPopupVisible"
        :isVisible="isPopupVisible"
        :film="currentFilm"
        @close="isPopupVisible = false"
      />
    </div>
  </Suspense>
</template>

<script setup lang="ts">
import FilmCard from '@/components/FilmCard.vue'
import FilmPopup from '@/components/FilmPopup.vue'
import PageHeading from '@/components/PageHeading.vue'
import { useFilmsStore } from '@/stores/films'
import type { Film } from '@/types/common'
import { onMounted, ref } from 'vue'

const filmsStore = useFilmsStore()
const currentFilm = ref({} as Film)

const isPopupVisible = ref(false)

function openPopup(film: Film) {
  currentFilm.value = film
  isPopupVisible.value = true
}

onMounted(async () => {
  if (filmsStore.films.length === 0) await filmsStore.fetchFilms()
})
</script>
