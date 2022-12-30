<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<template>
  <div
    class="absolute inset-0 m-auto h-36 w-36 bg-teal-700 p-2 text-center dark:bg-gray-200"
  >
    <p class="items-center text-4xl text-gray-400">not found</p>

    <button class="t-8 m-3" @click="router.back()">back</button>
  </div>
</template>
