<script setup lang="ts">
import Nav from "../components/nav.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <Nav />
  <div
    class="m-auto mt-4 h-[75%] w-[80%] border border-black bg-gray-300 md:w-[40%]"
  >
    <RouterView />
  </div>
</template>
