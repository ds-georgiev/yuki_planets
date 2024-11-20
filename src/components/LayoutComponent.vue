<template>
  <div
    id="app"
    class="min-h-screen w-full max-w-[1280px] mx-auto bg-black flex flex-col"
  >
    <main class="flex-1 w-full">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<style scoped>
html,
body,
#app {
  height: 100%;
}
</style>
