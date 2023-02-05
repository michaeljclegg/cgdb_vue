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
  <!-- <artworks
    v-for="(invoice, index) in filteredData"
    :invoice="invoice"
    :key="index"
  /> -->
  <!-- <div v-for="item in artwork" :key="item.index"> -->
  <!-- <div>{{ item.index }}-{{ item.title }}, {{ item.date }}</div>
    <br /> -->
  <!-- run as table -->
  <table border="1" width="100%" height="100%">
    <thead>
      <th>Index</th>
      <th>Title</th>
      <th>Date</th>
    </thead>
    <tr v-for="item in artwork" :key="item.index">
      <td>{{ item.index }}</td>
      <td>{{ item.title.toLowerCase() }}</td>
      <td>{{ item.date }}</td>
    </tr>
  </table>
  <!-- </div> -->
</template>

<style scoped></style>
