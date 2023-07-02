a
<script setup lang="ts">
import { RouterLink } from "vue-router";
import { ref } from "vue";
//get collection test
//next two lines can be removed - testing collection
import { getDocs, collection, getFirestore, doc } from "firebase/firestore";
const db = getFirestore();
const colRef = collection(db, "artworks_cg");
const cgDocs = ref({});
getDocs(colRef)
.then((snapshot) => {
  cgDocs.value = snapshot.docs.length;
  let cg_artworks:Array = []
  snapshot.docs.forEach((doc) => {
    cg_artworks.push({...doc.data(), id: doc.id })
  })
   console.log(cg_artworks[0]);
})
.catch(err => {
  console.log(err.message);
})
</script>

<template>
  <div class="text-gray-600 text-1xl font-bold">document count:{{ cgDocs }}</div>
  <div class="mx-6 grid h-screen grid-cols-11 grid-rows-6">
    <div
      class="col-start-6 row-start-2 mb-4 self-end justify-self-center text-4xl text-red-800"
    >
      home
    </div>
    
    <RouterLink
    :to="{ name: 'numbers' }"
    class="btn_trans col-start-6 row-start-3 self-start justify-self-center"
    >numbers</RouterLink
    >
  </div>
</template>

<style scoped></style>
