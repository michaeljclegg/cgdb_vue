a<script setup lang="ts">
import { RouterLink } from "vue-router";
// import { useRouter } from "vue-router";
// const router = useRouter();
</script>

<template>
  <div class="mx-6 grid h-screen grid-cols-11 grid-rows-6">
    <div
      class="col-start-6 row-start-3 mb-4 self-end justify-self-center text-4xl text-red-800"
    >
      home
    </div>

    <RouterLink
      :to="{ name: 'numbers' }"
      class="btn_trans col-start-6 row-start-4 self-start justify-self-center"
      >numbers</RouterLink
    >
  </div>
</template>

<style scoped></style>
