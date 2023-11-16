<script lang="ts" setup>
import { ref } from "vue";

const props = defineProps(["artworkList"]);
const emit = defineEmits(["closeImage"]);

function buttonClose() {
  emit("closeImage");
}

function formatNumber(n: string) {
  // format number 1000000 to 1,234,567
  return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
</script>
<template>
  <div
    id="form1"
    tabindex="1"
    aria-hidden="true"
    class="flex items-center justify-center w-full overflow-x-hidden overflow-y-auto md:h-full"
  >
    <div class="relative w-full h-full max-w-2xl p-2 md:h-auto">
      <!-- Modal content -->
      <div
        class="p-4 bg-white border-2 border-gray-100 border-solid rounded-lg drop-shadow-xl dark:bg-gray-800 sm:p-4"
      >
        <!-- //! grid -->
        <div
          class="grid p-2 mb-4 bg-gray-300 rounded gap-x-4 gap-y-3 dark:bg-gray-700 sm:grid-cols-12"
        >
          <!--//! Thumbnail -->
          <figure
            class="max-w-xs sm:col-start-1 sm:col-end-6 sm:row-start-1 sm:row-end-3"
          >
            <img
              class="h-auto"
              src="@\assets\images\The_Cigar_Eaters_1983TN100.jpg"
              alt="The Cigar Eaters, 1983"
            />
          </figure>
          <!-- //! Title  -->
          <div class="sm:col-start-4 sm:col-end-13 sm:row-start-1 sm:row-end-3">
            <div
              id="title"
              class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-400 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
            >
              {{ artworkList.title }}
            </div>
          </div>

          <!-- //! index -->
          <div class="sm:col-start-1 sm:col-end-3 sm:row-start-3 sm:row-end-4">
            <label
              for="index"
              class="block mb-2 text-sm font-medium text-gray-900 input_num dark:text-white"
              >index</label
            >
            <div
              type="number"
              name="index"
              id="index"
              class="input_num block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-center text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
              placeholder="1.1"
            >
              {{ artworkList.index }}
            </div>
          </div>
          <!-- //! id Name -->
          <div class="sm:col-start-3 sm:col-end-13 sm:row-start-3 sm:row-end-4">
            <label
              for="name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >id name</label
            >
            <div
              type="text"
              name="name"
              id="name"
              class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
              placeholder="ID Name."
            >
              {{ artworkList.idName }}
            </div>
          </div>

          <!-- //! Year date -->
          <div class="sm:col-start-1 sm:col-end-3 sm:row-start-4 sm:row-end-5">
            <label
              for="year"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >year</label
            >
            <div
              name="year"
              id="year"
              class="input_num block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-center text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
              placeholder="1980"
            >
              {{ artworkList.year }}
            </div>
          </div>
          <!-- //! variations -->
          <div class="sm:col-start-3 sm:col-end-4 sm:row-start-4 sm:row-end-5">
            <label
              for="variations"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >variations</label
            >
            <div
              type="number"
              name="variations"
              id="variations"
              class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
              placeholder="1"
            >
              {{ artworkList.variations }}
            </div>
          </div>

          <!-- //! Dealer -->
          <div class="sm:col-start-4 sm:col-end-7 sm:row-start-4 sm:row-end-5">
            <label
              for="dealer"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >dealer</label
            >
            <div
              name="dealer"
              id="dealer"
              class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
              placeholder="Dealer / Institute name...."
            >
              {{ artworkList.dealer }}
            </div>
          </div>
          <!-- //! price -->
          <div class="sm:col-start-7 sm:col-end-9 sm:row-start-4 sm:row-end-5">
            <label
              for="price"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >price</label
            >
            <div
              name="price"
              id="price"
              class="input_num block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
              placeholder="00,000"
            >
              {{ artworkList.price }}
            </div>
          </div>

          <!-- //! Currency -->
          <div class="sm:col-start-9 sm:col-end-11 sm:row-start-4 sm:row-end-5">
            <label
              for="currency"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >currency</label
            >
            <div
              id="currency"
              class="block w-full p-3 text-sm text-gray-900 rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white "
            >
              {{ artworkList.curency }}
            </div>
          </div>

          <!-- //! sold  -->
          <div
            class="sm:col-start-11 sm:col-end-13 sm:row-start-4 sm:row-end-5"
          >
            <label
              for="radio-2"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >sold</label
            >
            <div
              id="radio-2"
              name="radio2"
              class="block w-full p-3 text-sm text-gray-900 rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white"
            >
              {{ artworkList.sold? 'Sold' : 'Available' }}
            </div>
          </div>

          <!-- //! Width -->
          <div class="sm:col-start-1 sm:col-end-3 sm:row-start-6 sm:row-end-7">
            <label
              for="width"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >width</label
            >
            <div
              type="number"
              name="width"
              id="width"
              class="input_num block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-center text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
              placeholder="000"
            >
              {{ artworkList.width }}
            </div>
          </div>
          <!-- //! Height -->
          <div class="sm:col-start-3 sm:col-end-5 sm:row-start-6 sm:row-end-7">
            <label
              for="height"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >height</label
            >
            <div
              type="number"
              name="height"
              id="height"
              class="input_num block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-center text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
              placeholder="000"
            >
              {{ artworkList.height }}
            </div>
          </div>
          <!-- //! Depth -->
          <div class="sm:col-start-5 sm:col-end-7 sm:row-start-6 sm:row-end-7">
            <label
              for="depth"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >depth</label
            >
            <div
              type="number"
              name="depth"
              id="depth"
              class="input_num block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-center text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
              placeholder="00"
            >
              {{ artworkList.depth }}
            </div>
          </div>

          <!-- //! Location city-->
          <div class="sm:col-start-7 sm:col-end-10 sm:row-start-6 sm:row-end-7">
            <label
              for="city"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >city</label
            >
            <div
              type="text"
              name="city"
              id="city"
              class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
              placeholder="Location City"
            >
              {{ artworkList.city }}
            </div>
          </div>
          <!-- //! Sale Date   -->
          <div
            class="sm:col-start-10 sm:col-end-13 sm:row-start-6 sm:row-end-7"
          >
            <label
              for="SaleDate"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Sale Date</label
            >
            <div
              type="text"
              name="SaleDate"
              id="SaleDate"
              class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
              placeholder="Location Country"
            >
              {{ artworkList.saleDate }}
            </div>
          </div>

          <!-- //! Notes  -->
          <div class="sm:row-end-9 sm:col-start-1 sm:col-end-13 sm:row-start-7">
            <label
              for="description"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >notes</label
            >
            <div
              id="description"
              class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
              placeholder="Write a description..."
            >
              {{ artworkList.noteDetails }}
            </div>
            <div class="Note"></div>
          </div>
          <!-- move bellow here-->
        </div>
      </div>
    </div>

    <!-- //! control buttons (update - delete - x)  -->
    <div class="flex items-center justify-end space-x-4">
      <!--//! control buttons to add -->
    </div>
  </div>
</template>

<style scoped>
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
