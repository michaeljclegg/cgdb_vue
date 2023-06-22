<script lang="ts" setup>
const emit = defineEmits(["closeImage"]);
function buttonClose() {
  emit("closeImage");
}

function formatNumber(n: number) {
  // format number 1000000 to 1,234,567
  return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
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
            <div
              class="sm:col-start-4 sm:col-end-13 sm:row-start-1 sm:row-end-3"
            >
              <textarea
                id="title"
                rows="3"
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-400 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                placeholder="The Single Executive Portrait Series #1..."
              ></textarea>
            </div>

            <!-- //! index -->
            <div
              class="sm:col-start-1 sm:col-end-3 sm:row-start-3 sm:row-end-4"
            >
              <label
                for="index"
                class="input_num mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >index</label
              >
              <input
                type="number"
                value="1"
                min="1"
                max="1000"
                name="index"
                id="index"
                class="input_num block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-center text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                placeholder="1.1"
              />
            </div>
            <!-- //! id Name -->
            <div
              class="sm:col-start-3 sm:col-end-13 sm:row-start-3 sm:row-end-4"
            >
              <label
                for="name"
                class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >id name</label
              >
              <input
                type="text"
                name="name"
                id="name"
                value=""
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                placeholder="First piece...."
              />
            </div>

            <!-- //! Year date -->
            <div
              class="sm:col-start-1 sm:col-end-3 sm:row-start-4 sm:row-end-5"
            >
              <label
                for="year"
                class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >year</label
              >
              <input
                type="number"
                name="year"
                id="year"
                value=""
                min="1980"
                max="2077"
                class="input_num block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-center text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                placeholder="1980"
              />
            </div>

            <!-- //! variations -->
            <div
              class="sm:col-start-3 sm:col-end-4 sm:row-start-4 sm:row-end-5"
            >
              <label
                for="variations"
                class="input_num mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >variations</label
              >
              <input
                type="number"
                value="1"
                min="1"
                max="3"
                name="variations"
                id="variations"
                class="input_num block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                placeholder="1"
              />
            </div>

            <!-- //! Dealer -->
            <div
              class="sm:col-start-4 sm:col-end-7 sm:row-start-4 sm:row-end-5"
            >
              <label
                for="dealer"
                class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >dealer</label
              >
              <input
                type="text"
                name="dealer"
                id="dealer"
                value=""
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                placeholder="dealer name...."
              />
            </div>
            <!-- //! price -->
            <div
              class="sm:col-start-7 sm:col-end-9 sm:row-start-4 sm:row-end-5"
            >
              <label
                for="price"
                class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >price</label
              >
              <input
                type="number"
                value=""
                name="price"
                id="price"
                class="input_num block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                placeholder="20,000"
              />
            </div>

            <!-- //! Currency -->
            <div
              class="sm:col-start-9 sm:col-end-11 sm:row-start-4 sm:row-end-5"
            >
              <label
                for="currency"
                class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >currency</label
              >
              <select
                id="currency"
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
              >
                <option selected="">€ euro</option>
                <option value="dollar">$ dollar</option>
                <option value="pound">£ pound</option>
                <option value="other">₪ other</option>
              </select>
            </div>

            <!-- //! sold - radio button  -->
            <div
              class="sm:col-start-11 sm:col-end-12 sm:row-start-4 sm:row-end-5"
            >
              <label
                for="radio-2"
                class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >sold</label
              >
              <input
                checked
                id="radio-2"
                type="radio"
                value="false"
                name="radio2"
                class="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
              />
            </div>

            <!-- //! Width -->
            <div
              class="sm:col-start-1 sm:col-end-3 sm:row-start-6 sm:row-end-7"
            >
              <label
                for="width"
                class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >width</label
              >
              <input
                type="number"
                name="width"
                id="width"
                value=""
                class="input_num block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-center text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                placeholder="120"
              />
            </div>
            <!-- //! Height -->
            <div
              class="sm:col-start-3 sm:col-end-5 sm:row-start-6 sm:row-end-7"
            >
              <label
                for="height"
                class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >height</label
              >
              <input
                type="number"
                name="height"
                id="height"
                value=""
                class="input_num block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-center text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                placeholder="170"
              />
            </div>
            <!-- //! Depth -->
            <div
              class="sm:col-start-5 sm:col-end-7 sm:row-start-6 sm:row-end-7"
            >
              <label
                for="depth"
                class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >depth</label
              >
              <input
                type="number"
                value=""
                name="depth"
                id="depth"
                class="input_num block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-center text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                placeholder="20"
              />
            </div>

            <!-- //! Location city-->
            <div
              class="sm:col-start-7 sm:col-end-10 sm:row-start-6 sm:row-end-7"
            >
              <label
                for="city"
                class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >city</label
              >
              <input
                type="text"
                value=""
                name="city"
                id="city"
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                placeholder="New York"
              />
            </div>
            <!-- //! Location country  -->
            <div
              class="sm:col-start-10 sm:col-end-13 sm:row-start-6 sm:row-end-7"
            >
              <label
                for="location"
                class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >country</label
              >
              <input
                type="text"
                value=""
                name="country"
                id="country"
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                placeholder="USA"
              />
            </div>

            <!-- //! Notes  -->
            <div
              class="sm:row-end-9 sm:col-start-1 sm:col-end-13 sm:row-start-7"
            >
              <label
                for="description"
                class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >notes</label
              >
              <textarea
                id="description"
                rows="5"
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                placeholder="Write a description..."
              >
...this is the first image taken in the studio NY 1980</textarea
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
                class="mr-1 -ml-1 h-5 w-5"
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
