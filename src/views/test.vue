<script setup lang="ts">
import { defineComponent, onMounted, ref, watch } from "vue";
// import artworks from "@/components/artworks.vue";
// import useLowerCase from "@/composables/firestore/useLowerCase";
import getCollection from "@/composables/firestore/getCollection";

// const changeLowerCase = useLowerCase();
const error = ref("");
const artwork = ref(null);
onMounted(() => {
  getColl();
});

//! getCollection
//! add params of cityShoot like
//getCollection("artwork", "New York");
// to filter result set.
const getColl = () => {
  try {
    const { documents } = getCollection("artwork", "");
    watch(documents, (documents, pre_documents) => {
      artwork.value = documents;
      // console.log("artwork: ", artwork);
      return { artwork };
    });
  } catch (err) {
    console.log(err.message);
    error.value = "Could not retrieve data from Firestore";
  }
};
</script>

<template>
  <div class="text-2xl text-blue-700">ARTWORKS</div>
  <br />
  <div v-for="item in artwork" :key="item.index">
    <!-- <div class="grid grid-cols-[1fr_9fr_2fr] gap-4"> -->
    <div
      class="grid grid-cols-[minmax(50px,_1fr)_minmax(500px,_7fr)_minmax(100px,_2fr)_minmax(100px,_2fr)] gap-4"
    >
      <div class="text-right">{{ item.index }}</div>
      <div class="text-left">{{ item.title.toLowerCase() }}</div>
      <div class="text-left">{{ item.idName.toLowerCase() }}</div>
      <div class="text-center">{{ item.date }}</div>
    </div>
  </div>
</template>

<style scoped>
.table {
  min-width: 100vw;
  width: auto;
  flex: 1;
  display: grid;
  border-collapse: collapse;
  /* These are just initial values which are overriden using JavaScript when a column is resized */
  grid-template-columns:
    minmax(150px, 1fr)
    minmax(150px, 1.67fr)
    minmax(150px, 1.67fr);
}
</style>
