<script lang="ts" setup>
import { useCollection } from "../stores/collection";
import { ref, watchEffect, onMounted } from "vue";
import display from "@/components/display.vue";
import prints from "@/components/prints.vue";
import details from "@/components/details.vue";
import image from "@/components/image.vue";
// import artworks from "@/components/artworks.vue";
// import useLowerCase from "@/composables/firestore/useLowerCase";

const col = useCollection();
// const artPiece = ref({})
// const fileID = ref(null)
// const isPending = ref(false)

const currentTab = ref("display");

const tabs = {
  display,
  prints,
  details,
  image,
};

onMounted(() => {
  col.getColl();
  // console.log("artwork2: ", col.artwork );
});

const artworkList = ref({});
artworkList.value = col.artwork;
// console.log(artworkList.value);
const currentArtwork = ref({});
</script>

<template>
  <div class="flex flex-row items-center justify-center mb-4">
    <button
      v-for="(_, tab) in tabs"
      :key="tab"
      :class="['tab-button', { active: currentTab === tab }]"
      class="block bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      @click="currentTab = tab"
    >
      {{ tab }}
    </button>
  </div>
  <div v-for="art in col.artwork" :key="art.index">
    <div class="text-center">{{ art.title }}</div>
    <component
      :is="tabs[currentTab]"
      :artworkList="art"
      class="tab"
    ></component>
  </div>
</template>
