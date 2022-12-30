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
      <RouterLink :to="{ name: 'about' }">
        <div class="flex items-center gap-3 text-[20px]">about</div>
      </RouterLink>
      <RouterLink :to="{ name: 'numbers' }">
        <div class="flex items-center gap-3 text-[20px]">numbers</div>
      </RouterLink>
    </nav>
  </header>
</template>
