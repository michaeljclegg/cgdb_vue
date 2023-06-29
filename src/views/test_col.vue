<script lang="ts" setup>
import { useCollection } from "../stores/collection";
import { ref, watchEffect, onMounted } from "vue";
const col = useCollection();

onMounted(() => {
  col.getColl();
//   console.log("artwork2: ", col.artwork );
});
</script>

<template>
    <div class="txt_2xl">this is test-col</div>
    <div v-for="art in col.artwork" :key="art.index">
        <div class="text-right">{{ art.index }}</div>
        <div class="text-right">{{ art.title }}</div>
    </div>
</template>
