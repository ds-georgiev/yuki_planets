<template>
  <div class="fade z-1"></div>
  <section class="star-wars">
    <div class="crawl">
      <div class="title">
        <p>Episode {{ film.episode_id }}</p>
        <h1>{{ film.title }}</h1>
      </div>

      <p>
        {{ film.opening_crawl }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import type { Film } from "@/types/common";

defineProps({
  film: {
    type: Object as () => Film,
    required: true,
  },
});
</script>

<style scoped lang="scss">
@keyframes crawl {
  0% {
    top: -100px;
    transform: rotateX(20deg) translateZ(0);
  }
  100% {
    top: -6000px;
    transform: rotateX(25deg) translateZ(-2500px);
  }
}

.fade {
  position: relative;
  width: 100%;
  min-height: 70vh;
  top: -125px;
  background-image: linear-gradient(0deg, transparent, black 75%);
  z-index: 1;
}

.star-wars {
  display: flex;
  justify-content: center;
  position: relative;
  height: 200px;
  color: #feda4a;
  font-family: "Pathway Gothic One", sans-serif;
  font-size: 500%;
  font-weight: 600;
  letter-spacing: 6px;
  line-height: 150%;
  perspective: 400px;
  text-align: justify;

  .crawl {
    position: relative;
    top: 99999px;
    transform-origin: 50% 100%;
    animation: crawl 60s linear;

    & .title {
      font-size: 90%;
      text-align: center;

      h1 {
        margin: 0 0 100px;
        text-transform: uppercase;
      }
    }
  }
}
</style>
