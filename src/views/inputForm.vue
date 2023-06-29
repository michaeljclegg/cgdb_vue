<script lang="ts" setup>
import { useCollection } from "../stores/collection";
import { ref, watchEffect, onMounted } from "vue";
import form1 from "@/components/form1.vue";
import form2 from "@/components/form2.vue";
import form3 from "@/components/form3.vue";
import form4 from "@/components/form4.vue";
// import artworks from "@/components/artworks.vue";
// import useLowerCase from "@/composables/firestore/useLowerCase";

const col = useCollection();
const artPiece = ref({})
const fileID = ref(null)
const isPending = ref(false)

const showArtwork = ref(true);
const showPrints = ref(false);
const showDetails = ref(false);
const showImage = ref(false);

const showHideArtwork = () => {
  if (showArtwork.value === false) {
    showArtwork.value = true;
    showPrints.value = false;
    showDetails.value = false;
    showImage.value = false;
  }
};

const showHidePrints = () => {
  if (showPrints.value === false) {
    showPrints.value = true;
    showArtwork.value = false;
    showDetails.value = false;
    showImage.value = false;
  }
};

const showHideDetails = () => {
  if (showDetails.value === false) {
    showDetails.value = true;
    showPrints.value = false;
    showArtwork.value = false;
    showImage.value = false;
  }
};

const showHideImage = () => {
  if (showImage.value === false) {
    showImage.value = true;
    showPrints.value = false;
    showArtwork.value = false;
    showDetails.value = false;
  }
};

const closeSubForm = () => (showArtwork.value = false);
const closeSubForm2 = () => (showPrints.value = false);
const closeSubForm3 = () => (showDetails.value = false);
const closeSubForm4 = () => (showImage.value = false);

onMounted(() => {
  col.getColl();
//   console.log("artwork2: ", col.artwork );
});

const artworkList = ref({})
artworkList.value = col.artwork
// console.log(artworkList.value);

</script>

<template>
  <!-- Modal toggle -->
  <!-- //! Navigation buttons (artwork - prints - details - image)-->
  <div class="my-5 flex justify-center">
    <!--  artwork -->
    <button
      @click="showHideArtwork"
      class="block bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      type="button"
    >
      artwork
    </button>
    <!--  prints -->
    <button
      @click="showHidePrints"
      tabindex="0"
      class="block bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      type="button"
    >
      prints
    </button>
    <!--  details -->
    <button
      @click="showHideDetails"
      class="block bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      type="button"
    >
      details
    </button>
    <!-- image -->
    <button
      @click="showHideImage"
      class="block bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      type="button"
    >
      image
    </button>
  </div>
  <!-- NOTE start of v-for artworks collection -->
  <div v-for="art in col.artwork" :key="art.index">

      <p class="text-1xl mt-2 text-red-800">
        Title: {{ art.title }}
      </p>
      <!-- modals -->
      <div v-if="showArtwork" class="mt-1">
        <form1 :artworkList="art" @closeImage="closeSubForm" />
             <!--  add all related props - coming from collection. -->
      </div>
      <div v-if="showPrints" class="mt-1">
        <form2 @closeImage="closeSubForm2" />
      </div>
      <div v-if="showDetails" class="mt-1">
        <form3 @closeImage="closeSubForm3" />
      </div>
      <div v-if="showImage" class="mt-1">
        <form4 @closeImage="closeSubForm4" />
      </div>
  </div>
    <!-- NOTE end of v-for artworks collection -->
    
    
  <!-- //! pagination (out of body)-->
  <nav aria-label="Page navigation example">
    <ul class="mt-2 inline-flex -space-x-px">
      <li>
        <a
          href="#"
          class="ml-0 rounded-l-lg border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >Previous</a
        >
      </li>
      <li>
        <a
          href="#"
          class="border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >1</a
        >
      </li>
      <li>
        <a
          href="#"
          class="border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >2</a
        >
      </li>
      <li>
        <a
          href="#"
          aria-current="page"
          class="border border-gray-300 bg-blue-50 px-3 py-2 text-blue-600 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
          >3</a
        >
      </li>
      <li>
        <a
          href="#"
          class="border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >4</a
        >
      </li>
      <li>
        <a
          href="#"
          class="border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >5</a
        >
      </li>
      <li>
        <a
          href="#"
          class="rounded-r-lg border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >Next</a
        >
      </li>
    </ul>
  </nav>
</template>
