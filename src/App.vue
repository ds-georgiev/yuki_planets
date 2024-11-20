<template>
  <NavbarComponent />

  <LayoutComponent>
    <RouterView />
  </LayoutComponent>
</template>

<script setup lang="ts">
import LayoutComponent from "./components/LayoutComponent.vue";
import NavbarComponent from "./components/NavbarComponent.vue";
</script>
