<script setup lang="ts">
import Nav from "../components/nav.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <Nav />
  <div
    class="m-auto mt-4 h-[90%] w-[80%] border border-black bg-red-400 md:w-[40%]"
  >
    <p class="mt-2 font-light text-red-500">main layout</p>
    <RouterView />
  </div>
</template>
