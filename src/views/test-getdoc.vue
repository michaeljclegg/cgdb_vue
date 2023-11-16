<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import readDoc from "../composables/firestore/getDoc";

const artwork = ref();
// const readDocument =  readDoc()

// onMounted(() => {
//   readDocs()
//  });

//NOTE - send collection name and document id as params.
const readDocs = async () => {
  const  documents  = await readDoc("artworks_cg", "0EWuFqVyGLGhbqyNQeEK")
    artwork.value = documents
console.log('Local result: ', documents);
}


</script>

<template>
           
            
  <button class="mb-4 rounded border border-blue-500 bg-red-400 py-2 px-4 mt-2 text-1xl font-semibold text-white hover:border-white hover:bg-blue-500 hover:text-white"
    @click="readDocs">show Doc.
</button>
  <div class="text-2xl text-white">
    {{ artwork }}
  </div>
</template>


