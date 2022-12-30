<script setup lang="ts">
import Nav from "../components/nav.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <Nav />
  <body class="h-screen bg-blue-200">
    <RouterView />
    <hr />
    <div class="flex justify-center">
      <p class="text-center text-2xl text-blue-600">cen</p>
      <p class="text-center text-2xl text-red-800">+</p>
      <p class="text-center text-2xl text-blue-600">ter</p>
    </div>
    <p class="text-1xl text-center font-mono text-blue-400">layout</p>
  </body>
</template>
