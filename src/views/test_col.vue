<script lang="ts" setup>

import { useCollection } from "../stores/collection";
import { updateField } from "../composables/firestore/updateField";
import { ref, watchEffect, onMounted } from "vue";
const col = useCollection();

// onMounted(() => {
//   col.getColl();
// //   console.log("artwork2: ", col.artwork );
// });
updateField()
  .then(() => {
    console.log('Field update successful.');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Error updating field:', error);
    process.exit(1);
  });
</script>

<template>
    <div class="txt_2xl">this is test-col</div>
    <div v-for="art in col.artwork" :key="art.index">
        <div class="text-right">{{ art.index }}</div>
        <div class="text-right">{{ art.title }}</div>
    </div>
</template>
