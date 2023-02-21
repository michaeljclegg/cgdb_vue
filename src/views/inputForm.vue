<script lang="ts" setup>
import form1 from "@/components/form1.vue";
import form2 from "@/components/form2.vue";
import form3 from "@/components/form3.vue";
import form4 from "@/components/form4.vue";
import { ref } from "vue";

const showArtwork = ref(true);
const showPrints = ref(false);
const showDetails = ref(false);
const showImage = ref(false);

const showHideArtwork = () => {
  showArtwork.value = !showArtwork.value;
  if (showPrints.value == true) {
    showPrints.value = false;
  } else if (showDetails.value == true) {
    showDetails.value = false;
  } else if (showImage.value == true) {
    showImage.value = false;
  }
};

const showHidePrints = () => {
  showPrints.value = !showPrints.value;
  if (showArtwork.value == true) {
    showArtwork.value = false;
  } else if (showDetails.value == true) {
    showDetails.value = false;
  } else if (showImage.value == true) {
    showImage.value = false;
  }
};

const showHideDetails = () => {
  showDetails.value = !showDetails.value;
  if (showPrints.value == true) {
    showPrints.value = false;
  } else if (showArtwork.value == true) {
    showArtwork.value = false;
  } else if (showImage.value == true) {
    showImage.value = false;
  }
};

const showHideImage = () => {
  showImage.value = !showImage.value;
  if (showPrints.value == true) {
    showPrints.value = false;
  } else if (showArtwork.value == true) {
    showArtwork.value = false;
  } else if (showDetails.value == true) {
    showDetails.value = false;
  }
};

const closeSubForm = () => (showArtwork.value = false);
const closeSubForm2 = () => (showPrints.value = false);
const closeSubForm3 = () => (showDetails.value = false);
const closeSubForm4 = () => (showImage.value = false);
</script>

<template>
  <!-- Modal toggle -->
  <!-- //! buttons -->
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
  <p class="text-1xl mt-2 text-red-800">
    The Single Executive Portrait Series #1..
  </p>
  <!-- <pre>{{ showArtwork }}</pre> -->
  <!-- Main modals -->
  <div v-if="showArtwork" class="mt-6">
    <form1 @closeImage="closeSubForm" />
  </div>
  <div v-if="showPrints" class="mt-6">
    <form2 @closeImage="closeSubForm2" />
  </div>
  <div v-if="showDetails" class="mt-6">
    <form3 @closeImage="closeSubForm3" />
  </div>
  <div v-if="showImage" class="mt-6">
    <form4 @closeImage="closeSubForm4" />
  </div>
</template>
