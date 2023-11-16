a
<script setup lang="ts">
import { RouterLink } from "vue-router";
import { ref } from "vue";
import Nav from "@/components/nav.vue";
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
  <Nav/>
  <div class="font-bold text-gray-600 text-1xl">document count:{{ cgDocs }}</div>
  <div class="grid h-screen grid-cols-11 grid-rows-6 mx-6">
    <div
      class="self-end col-start-6 row-start-2 mb-4 text-4xl text-red-800 justify-self-center"
    >
      home

    </div>
    
  
  </div>
</template>

<style scoped></style>
