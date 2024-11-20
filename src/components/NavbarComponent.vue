<template>
  <nav class="bg-black w-100 px-8">
    <div
      class="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap"
    >
      <div class="order-1">
        <YukiSvg :type="'r2d2'" />
      </div>
      <div class="text-yellow-400 order-3 w-full md:w-auto md:order-2">
        <ul class="flex font-semibold justify-between">
          <li class="md:px-4 md:py-2 hover:text-gray-400">
            <RouterLink to="/">Home</RouterLink>
          </li>
          <li class="md:px-4 md:py-2 hover:text-gray-400">
            <RouterLink to="/planets">Planets</RouterLink>
          </li>
          <li class="md:px-4 md:py-2 hover:text-gray-400">
            <RouterLink to="/films">Films</RouterLink>
          </li>
        </ul>
      </div>
      <div class="order-2 md:order-3">
        <a
          class="px-4 py-2 bg-yellow-500 hover:bg-yellow-300 text-black rounded-xl flex items-center gap-2"
          href="https://github.com/ds-georgiev/yuki_planets"
          target="_blank"
        >
          <YukiSvg :type="'github'" />
          <span>GitHub</span>
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import YukiSvg from "./YukiSvg.vue";
</script>
