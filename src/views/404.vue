<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter();
const navigateToHome = () => {
  router.push("/")
}
</script>

<template>
  <div
    class="absolute inset-0 p-2 m-auto text-center bg-teal-700 h-36 w-36 dark:bg-gray-200"
  >
    <p class="items-center text-4xl text-gray-400">NOT FOUND</p>

    <button class="m-3 t-8" @click="navigateToHome">back</button>
  </div>
</template>
