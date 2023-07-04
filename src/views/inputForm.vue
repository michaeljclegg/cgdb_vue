<script lang="ts" setup>
import { useCollection } from "../stores/collection";
import { ref, watchEffect, onMounted } from "vue";

// import artworks from "@/components/artworks.vue";
// import useLowerCase from "@/composables/firestore/useLowerCase";

const col = useCollection();
const artPiece = ref({});
const fileID = ref(null);
const isPending = ref(false);

onMounted(() => {
  col.getColl();
  //   console.log("artwork2: ", col.artwork );
});

const artworkList = ref({});
artworkList.value = col.artwork;
// console.log(artworkList☺.value);
// NOTE list of all variables for form 1 (Artwork)
//! Title
const artTitle = ref("");
// Index
const artIndex = ref("");
// Id Name
const artIdName = ref("");
// Variations Number
const artVariations = ref("");
// Year
const artYear = ref("");
const numYear = Number(artYear.value);
// Dealer / Institute  Name
const artDealer = ref("");
// Price
const artPrice = ref("");
// Currency
const artCurrency = ref("");
// Sold?
const artSold = ref("");
// width?
const artWidth = ref("");
// height?
const artHeight = ref("");
// Depth?
const artDepth = ref("");
// Location City?
const artCity = ref("");
// Location Country
const artCountry = ref("");
//Notes
const artNote = ref("");
//Material
const artMaterial = ref("");
// Framed
const artFramed = ref("");
// Gener
const artGener = ref("");
// Mounting
const artMounting = ref(""); // Mounting
//Laminated
const artLaminated = ref(""); // Laminated
//Category
const artCategory = ref(""); // Category
//condition
const artCondition = ref(""); // Condition
//Type
const artType = ref(""); // Type
//Subtype
const artSubtype = ref(""); // Subtype
//Sitters
const artSitters = ref(""); // Sitters
//Location city
const artLocationCity = ref(""); // Location City
//Panels
const artPanels = ref(""); // Panels
// Print Notes
const artPrintNotes = ref(""); // Print Notes
// Shooting Date
const artShootingDate = ref(""); // Shooting Date
//Shooting City
const artShootingCity = ref(""); // Shooting City
// Transparency Size
const artTransparencySize = ref(""); // Transparency 
//Transparency Number
const artTransparencyNumber = ref(""); // Transparency Number
// Photographed At
const artPhotographedAt = ref(""); // Photographed At
 // Background
 const artBackground = ref(""); // Background
 // Accessories
const artAccessories = ref(""); // Accessories
//Reproduced
const artReproduced = ref(""); // Reproduced
// Transparency Notes
const artTransparencyNotes = ref(""); // Transparency Notes
// console.log(typeof numIndex);

</script>

<template>
  <!-- Modal toggle -->
  <!-- //! Navigation buttons (artwork - prints - details - image)-->
  <div class="my-5 flex justify-center">
    <!--  artwork -->
  </div>

  <!-- NOTE end of v-for artworks collection -->
  <form action="#">
    <!-- //! grid -->
    <div
      class="mb-4 grid gap-x-4 gap-y-3 rounded bg-gray-200 p-2 dark:bg-gray-700 sm:grid-cols-12"
    >
      D
      <!-- //! Title  -->
      <div class="sm:col-start-4 sm:col-end-13 sm:row-start-1 sm:row-end-3">
        <textarea
          v-model="artTitle"
          id="title"
          rows="2"
          class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-400 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
          placeholder="Enter / Edit TITLE OF ARTWORK."
        ></textarea>
      </div>

      <!-- //! index -->
      <div class="sm:col-start-1 sm:col-end-3 sm:row-start-3 sm:row-end-4">
        <label
          for="index"
          class="input_num mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >index</label
        >
        <input
          v-model="numIndex"
          type="number"
          min="1"
          max="1000"
          name="index"
          id="index"
          class="input_num block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-center text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
          placeholder="1.1"
        />
      </div>
      <!-- //! id Name -->
      <div class="sm:col-start-3 sm:col-end-13 sm:row-start-3 sm:row-end-4">
        <label
          for="name"
          class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >id name</label
        >
        <input
          v-model="artIdName"
          type="text"
          name="name"
          id="name"
          class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
          placeholder="ID Name."
        />
      </div>

      <!-- //! Year date -->
      <div class="sm:col-start-1 sm:col-end-3 sm:row-start-4 sm:row-end-5">
        <label
          for="year"
          class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >year</label
        >
        <input
          v-model="numYear"
          type="number"
          name="year"
          id="year"
          min="1980"
          max="2080"
          class="input_num block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-center text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
          placeholder="1980"
        />
      </div>

      <!-- //! variations -->
      <div class="sm:col-start-3 sm:col-end-4 sm:row-start-4 sm:row-end-5">
        <label
          for="variations"
          class="input_num mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >variations</label
        >
        <input
          type="number"
          v-model="numVariations"
          min="1"
          max="3"
          name="variations"
          id="variations"
          class="input_num block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
          placeholder="1"
        />
      </div>

      <!-- //! Dealer -->
      <div class="sm:col-start-4 sm:col-end-7 sm:row-start-4 sm:row-end-5">
        <label
          for="dealer"
          class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >dealer</label
        >
        <input
          v-model="artDealer"
          type="text"
          name="dealer"
          id="dealer"
          class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
          placeholder="Dealer / Institute name...."
        />
      </div>
      <!-- //! price -->
      <div class="sm:col-start-7 sm:col-end-9 sm:row-start-4 sm:row-end-5">
        <label
          for="price"
          class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >price</label
        >
        <input
          v-model="numPrice"
          type="number"
          name="price"
          id="price"
          class="input_num block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
          placeholder="00,000"
        />
      </div>

      <!-- //! Currency -->
      <div class="sm:col-start-9 sm:col-end-11 sm:row-start-4 sm:row-end-5">
        <label
          for="currency"
          class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >currency</label
        >
        <select
          v-model="artCurrency"
          id="currency"
          class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
        >
          <option selected.value="">€ euro</option>
          <option value="dollar">$ dollar</option>
          <option value="pound">£ pound</option>
          <option value="other">₪ other</option>
        </select>
      </div>

      <!-- //! sold - radio button  -->
      <div class="sm:col-start-11 sm:col-end-12 sm:row-start-4 sm:row-end-5">
        <label
          for="radio-2"
          class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >sold</label
        >
        <input
          checked
          v-model="artSold"
          id="radio-2"
          type="radio"
          name="radio2"
          class="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
        />
      </div>

      <!-- //! Width -->
      <div class="sm:col-start-1 sm:col-end-3 sm:row-start-6 sm:row-end-7">
        <label
          for="width"
          class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >width</label
        >
        <input
          v-model="artWidth"
          type="number"
          name="width"
          id="width"
          class="input_num block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-center text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
          placeholder="000"
        />
      </div>
      <!-- //! Height -->
      <div class="sm:col-start-3 sm:col-end-5 sm:row-start-6 sm:row-end-7">
        <label
          for="height"
          class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >height</label
        >
        <input
          v-model="artHeight"
          type="number"
          name="height"
          id="height"
          class="input_num block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-center text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
          placeholder="000"
        />
      </div>
      <!-- //! Depth -->
      <div class="sm:col-start-5 sm:col-end-7 sm:row-start-6 sm:row-end-7">
        <label
          for="depth"
          class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >depth</label
        >
        <input
          v-model="artDepth"
          type="number"
          name="depth"
          id="depth"
          class="input_num block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-center text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
          placeholder="00"
        />
      </div>

      <!-- //! Location city-->
      <div class="sm:col-start-7 sm:col-end-10 sm:row-start-6 sm:row-end-7">
        <label
          for="city"
          class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >city</label
        >
        <input
          v-model="artCity"
          type="text"
          name="city"
          id="city"
          class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
          placeholder="Location City"
        />
      </div>
      <!-- //! Location country  -->
      <div class="sm:col-start-10 sm:col-end-13 sm:row-start-6 sm:row-end-7">
        <label
          for="location"
          class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >country</label
        >
        <input
          v-model="artCountry"
          type="text"
          name="country"
          id="country"
          class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
          placeholder="Location Country"
        />
      </div>

      <!-- //! Notes  -->
      <div class="sm:row-end-8 sm:col-start-1 sm:col-end-13 sm:row-start-7">
        <label
          for="description"
          class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >notes</label
        >
        <textarea
          v-model="artNote"
          id="description"
          rows="2"
          class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
          placeholder="Write a description..."
        >
<div class="Note"></div></textarea
        >
      </div>

      <!-- //! material -->
      <div class="sm:row-start-9 sm:row-end-10 sm:col-start-2 sm:col-end-5">
        <label
          for="material"
          class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >material</label
        >
        <select
          v-model="artMaterial"
          id="material"
          class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
        >
          <option selected="">Cibachrome</option>
          <option value="dollar">Type C-Print</option>
          <option value="pound">Digital</option>
          <option value="other">Other</option>
        </select>
      </div>
      <!-- //! framed - radio button  -->
      <div class="sm:row-start-9 sm:row-end-10 sm:col-start-6 sm:col-end-7">
        <label
          for="radio-2"
          class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >framed</label
        >
        <input
          v-model="artFramed"
          checked
          id="radio-2"
          type="radio"
          name="radio2"
          class="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
        />
      </div>
      <!-- //! Gener -->
      <div class="sm:row-start-9 sm:row-end-10 sm:col-start-9 sm:col-end-12">
        <label
          for="gener"
          class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >gener</label
        >
        <select
          v-model="artGener"
          id="gener"
          class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
        >
          <option selected="">portrait</option>
          <option value="Portrait">portrait</option>
          <option value="Still Live">still life</option>
          <option value="Landscape">landscape</option>
          <option value="Other">other</option>
        </select>
      </div>
      <!-- //! mounting -->
      <div class="sm:row-start-10 sm:row-end-11 sm:col-start-2 sm:col-end-5">
        <label
          for="mounting"
          class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >mounting</label
        >
        <select
          id="mounting"
          class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
        >
          <option selected="">Aluminum</option>
          <option value="dollar">Wood</option>
          <option value="pound">Other</option>
          <option value="other">Unmounted</option>
        </select>
      </div>
      <!-- //! Laminated - radio button  -->
      <div class="sm:row-start-11 sm:row-end-12 sm:col-start-6 sm:col-end-7">
        <label
          for="radio-2"
          class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >laminated</label
        >
        <input
          v-model="artLaminated"
          id="radio-2"
          type="radio"
          value="false"
          name="radio2"
          class="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
        />
      </div>
      <!-- //! category -->
      <div class="sm:col-start-9 sm:col-end-12 sm:row-start-10 sm:row-end-11">
        <label
          for="category"
          class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >category</label
        >
        <select
          v-model="artCategory"
          id="category"
          class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
        >
          <option selected="fictional">fictional</option>
          <option value="commissioned">commissioned</option>
          <option value="rejected">rejected</option>
          <option value="collaboration">collaboration</option>
        </select>
      </div>
      <!-- //! condition -->
      <div class="sm:row-start-11 sm:row-end-12 sm:col-start-2 sm:col-end-5">
        <label
          for="condition"
          class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >condition</label
        >
        <select
          v-model="artCondition"
          id="condition"
          class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
        >
          <option selected="good">good</option>
          <option value="mediocre">mediocre</option>
          <option value="poor">poor</option>
          <option value="damaged">damaged</option>
        </select>
      </div>

      <!-- //! number of sitters -->
      <div class="sm:col-start-6 sm:col-end-7 sm:row-start-11 sm:row-end-12">
        <label
          for="sitters"
          class="input_num mb-2 block text-center text-sm font-medium text-gray-900 dark:text-white"
          >sitters</label
        >
        <input
          v-model="artSitters"
          type="number"
          min="1"
          max="20"
          name="sitters"
          id="sitters"
          class="input_num block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-center text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
          placeholder="1"
        />
      </div>
         <!-- //! type -->
         <div class="sm:col-start-9 sm:col-end-12 sm:row-start-11 sm:row-end-12">
        <label
          for="type"
          class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >type</label
        >
        <select
          id="type"
          class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
        >
          <option selected="single portrait">single portrait</option>
          <option value="double portrait">double portrait</option>
          <option value="triple portrait">triple portrait</option>
          <option value="group portrait">group portrait</option>
        </select>
      </div>
      <!-- //! location city -->
      <div class="sm:col-start-2 sm:col-end-5 sm:row-start-12 sm:row-end-13">
        <label
          for="locationCity"
          class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >location city</label
        >
        <input
          v-model="artLocationCity"
          type="text"
          name="locationCity"
          id="locationCity"
          class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-center text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
          placeholder="New York"
        />
      </div>
      <!-- //! panels -->
      <div class="sm:col-start-6 sm:col-end-7 sm:row-start-12 sm:row-end-13">
        <label
          for="panels"
          class="input_num mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >panels</label
        >
        <input
          v-model="artPanels"
          type="number"
          min="1"
          max="8"
          name="panels"
          id="panels"
          class="input_num block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-center text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
          placeholder="1"
        />
      </div>
         <!-- //! sub type -->
      <div class="sm:col-start-9 sm:col-end-12 sm:row-start-12 sm:row-end-13">
        <label
          for="sub type"
          class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >sub type</label
        >
        <select
          v-model="artSubtype"
          id="sub type"
          class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
        >
          <option selected="adult male">adult male</option>
          <option value="adult female">adult female</option>
          <option value="child male">child male</option>
          <option value="child female">child female</option>
          <option value="couple male female">couple male female</option>
          <option value="couple same sex">couple same sex</option>
          <option value="parent and child">parent and child</option>
          <option value="adult group male">adult group male</option>
          <option value="adult group female">adult group female</option>
          <option value="adult group mixed">adult group mixed</option>
          <option value="family one parent">family one parent</option>
          <option value="family two parentser">family two parents</option>
          <option value="children">children</option>
        </select>
      </div>

      <!-- //! Notes  -->
      <div class="sm:row-end-9 sm:row-start-8 sm:col-start-13 sm:col-end-14">
        <label
          for="description"
          class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >print notes</label
        >
        <textarea
          v-model="artPrintNotes"
          id="description"
          rows="2"
          class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
          placeholder="Write a description..."
        >
...Notes related to Print</textarea
        >
      </div>
    </div>

    <!-- //! control buttons (update - delete - x)  -->
    <div class="flex items-center justify-end space-x-4">
      <button
        @click="updateData"
        type="submit"
        class="rounded-lg border border-primary-700 px-5 py-2.5 text-center text-sm font-medium text-primary-700 hover:bg-primary-800 hover:text-white focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        update
      </button>
      <button
        type="button"
        class="inline-flex items-center rounded-lg border border-red-600 px-5 py-2.5 text-center text-sm font-medium text-red-600 hover:bg-red-600 hover:text-white focus:outline-none focus:ring-4 focus:ring-red-300 dark:border-red-500 dark:text-red-500 dark:hover:bg-red-600 dark:hover:text-white dark:focus:ring-red-900"
      >
        <svg
          class="-ml-1 mr-1 h-5 w-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
        Delete
      </button>
      <!--//! Close button -->
      <button
        type="button"
        class="inline-flex rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
        @click="buttonClose"
      >
        <svg
          aria-hidden="true"
          class="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span class="sr-only">Close modal</span>
      </button>
    </div>
  </form>

  <!-- //! pagination (out of body)-->
  <nav aria-label="Page navigation example">
    <ul class="mt-2 inline-flex -space-x-px">
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
