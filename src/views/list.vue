<script lang="ts" setup>

import { useCollection } from "../stores/collection";
import { onMounted } from "vue";
import Nav from "@/components/nav.vue";
const col = useCollection();

onMounted(() => {
  col.getColl();
//   console.log("artwork2: ", col.artwork );
});

</script>

<template>
  <Nav/>
    <div class="text-2xl font-bold">List Artworks</div>
    <div v-for="art in col.artwork" :key="art.index">
        <div class="text-left">{{ art.index }}</div>
        <div class="text-right">{{ art.title }}</div>
    </div>
</template>
