<template>
  <div>
    <h1
      class="text-4xl text-center font-bold font-starjhol tracking-tight text-yellow-300 sm:text-5xl md:text-6xl p-6"
    >
      {{ titleParts[0] }}
      <span
        class="text-transparent bg-clip-text bg-gradient-to-tr to-white from-black"
      >
        {{ highlight }}
      </span>
      {{ titleParts[1] }}
    </h1>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  highlight: {
    type: String,
    required: true,
  },
});

const titleParts = props.title.split(props.highlight);
</script>
