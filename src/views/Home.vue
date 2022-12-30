<script setup lang="ts">
import { RouterLink } from "vue-router";
// import { useRouter } from "vue-router";
// const router = useRouter();
</script>

<template>
  <div class="btn btn-trans mb-12 text-8xl text-red-800">home</div>
  <!-- <button class="t-8 m-3" @click="router.back()">back</button> -->
  <RouterLink
    :to="{ name: 'numbers' }"
    class="hover:text-white; rounded border border-blue-500 bg-transparent py-2 px-4 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500"
    >numbers</RouterLink
  >
</template>

<style scoped>
.NotUsed {
  width: 100px;
  height: 100px;
  background-color: red;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
</style>
