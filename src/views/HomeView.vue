<template>
  <div class="flex items-center justify-center flex-col p-4 overflow-hidden">
    <PageHeading title="Star Wars" highlight="Wars" style="z-index: 2" />
    <HomePageCrawl v-if="randomFilm" :film="randomFilm" />
  </div>
</template>

<script setup lang="ts">
import PageHeading from "@/components/PageHeading.vue";
import HomePageCrawl from "@/components/HomePageCrawl.vue";
import { onBeforeUnmount, onMounted, ref } from "vue";
import { useFilmsStore } from "@/stores/films";
import type { Film } from "@/types/common";

const filmsStore = useFilmsStore();
const randomFilm = ref<Film>();

onMounted(async () => {
  document.body.style.overflow = "hidden";
  if (filmsStore.films.length === 0) await filmsStore.fetchFilms();

  randomFilm.value = filmsStore.films[Math.floor(Math.random() * 6)];
});

onBeforeUnmount(() => {
  document.body.style.overflow = "";
});
</script>
