<script lang="ts" setup>
import { ref } from "vue";

const emit = defineEmits(["closeImage"]);
function buttonClose() {
  emit("closeImage");
}

const props = defineProps(["artworkList"]);

// NOTE list of all variables for form 1 (Artwork)
const artMaterial = ref(""); // Material
artMaterial.value = props.artworkList.material;
const artFramed = ref(""); // Framed
artFramed.value = props.artworkList.artFramed;
const artGener = ref(""); // Gener
artGener.value = props.artworkList.gener;
const artMounting = ref(""); // Mounting
artMounting.value = props.artworkList.mounting;
const artLaminated = ref(""); // Laminated
artLaminated.value = props.artworkList.laminated;
const artCategory = ref(""); // Category
artCategory.value = props.artworkList.category;
const artCondition = ref(""); // Condition
artCondition.value = props.artworkList.condition;
const artType = ref(""); // Type
artType.value = props.artworkList.type;
const artSubtype = ref(""); // Subtype
artSubtype.value = props.artworkList.subtype;
const artSitters = ref(""); // Sitters
artSitters.value = props.artworkList.sitters;
const artLocationCity = ref(""); // Location City
artLocationCity.value = props.artworkList.city;
const artPanels = ref(""); // Panels
artPanels.value = props.artworkList.panels;
const artPrintNotes = ref(""); // Print Notes
artPrintNotes.value = props.artworkList.notePrint;
</script>

<template>
  <div
    id="form1"
    tabindex="1"
    aria-hidden="true"
    class="flex w-full items-center justify-center overflow-y-auto overflow-x-hidden md:h-full"
  >
    <div class="relative h-full w-full max-w-2xl p-2 md:h-auto">
      <!-- Modal content -->
      <div
        class="rounded-lg border-2 border-solid border-gray-100 bg-white p-4 drop-shadow-xl dark:bg-gray-800 sm:p-4"
      >
        <form action="#">
          <!-- //! grid -->
          <div
            class="mb-4 grid gap-x-4 gap-y-3 rounded bg-gray-200 p-2 dark:bg-gray-700 sm:grid-cols-12"
          >
            <!-- //! material -->
            <div
              class="sm:col-start-2 sm:col-end-5 sm:row-start-1 sm:row-end-2"
            >
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
            <div
              class="sm:col-start-6 sm:col-end-7 sm:row-start-1 sm:row-end-2"
            >
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
            <div
              class="sm:col-start-9 sm:col-end-12 sm:row-start-1 sm:row-end-2"
            >
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
            <div
              class="sm:col-start-2 sm:col-end-5 sm:row-start-2 sm:row-end-3"
            >
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
            <div
              class="sm:col-start-6 sm:col-end-7 sm:row-start-2 sm:row-end-3"
            >
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
            <!-- //! condition -->
            <div
              class="sm:col-start-2 sm:col-end-5 sm:row-start-3 sm:row-end-4"
            >
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
            <div
              class="sm:col-start-6 sm:col-end-7 sm:row-start-3 sm:row-end-4"
            >
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
            <!-- //! location city -->
            <div
              class="sm:col-start-2 sm:col-end-5 sm:row-start-4 sm:row-end-5"
            >
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
            <div
              class="sm:col-start-6 sm:col-end-7 sm:row-start-4 sm:row-end-5"
            >
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

            <!-- //! category -->
            <div
              class="sm:col-start-9 sm:col-end-12 sm:row-start-2 sm:row-end-3"
            >
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
            <!-- //! type -->
            <div
              class="sm:col-start-9 sm:col-end-12 sm:row-start-3 sm:row-end-4"
            >
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
            <!-- //! sub type -->
            <div
              class="sm:col-start-9 sm:col-end-12 sm:row-start-4 sm:row-end-5"
            >
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
            <div
              class="sm:row-end-9 sm:row-start-8 sm:col-start-2 sm:col-end-12"
            >
              <label
                for="description"
                class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >print notes</label
              >
              <textarea
                v-model="artPrintNotes"
                id="description"
                rows="4"
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
      </div>
    </div>
  </div>
</template>

<style>
/* HIDE ARROWS IN INPUT NUMBER - > Chrome, Safari, Edge, Opera */
.input_num::-webkit-outer-spin-button,
.input_num::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
.input_num[type="number"] {
  -moz-appearance: textfield;
}
</style>
