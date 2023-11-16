<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <header class="sticky top-0 bg-blue-200 shadow-lg">
    <nav
      class="container flex flex-col items-center justify-center gap-4 py-6 text-white sm:flex-row"
    >
      <RouterLink :to="{ name: 'home' }">
        <div class="flex items-center gap-3 text-[20px]">home</div>
      </RouterLink>
      <RouterLink 
        :to="{ name: 'display' }">
        <div class="flex items-center gap-3 text-[20px]">display</div>
      </RouterLink>
      <RouterLink
        :to="{ name: 'input' }"
        class="flex items-center gap-3 text-[20px]"
        >input</RouterLink
      >
      <RouterLink :to="{ name: 'list' }">
        <div class="flex items-center gap-3 text-[20px]">list</div>
      </RouterLink>

    </nav>
  </header>
</template>
