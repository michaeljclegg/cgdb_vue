<script lang="ts" setup>
import { ref } from "vue";

const emit = defineEmits(["closeImage"]);
function buttonClose() {
  emit("closeImage");
}

const props = defineProps(["artworkList"]);
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
        <form action="#">
          <!-- //! grid -->
          <div
            class="grid p-2 mb-4 bg-gray-300 rounded gap-x-4 gap-y-3 dark:bg-gray-700 sm:grid-cols-12"
          >
            <!-- //! shooting year -->
            <div
              class="sm:col-start-2 sm:col-end-4 sm:row-start-1 sm:row-end-2"
            >
              <label
                for="shooting_year"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >shooting date</label
              >
              <div
                type="text"
                name="shooting_year"
                id="shooting_year"
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-center text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
              >
                {{ artworkList.dateShooting }}
              </div>
            </div>
            <!-- //!  place -->
            <div
              class="sm:col-start-4 sm:col-end-6 sm:row-start-1 sm:row-end-2"
            >
              <label
                for="shooting_place"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >... place</label
              >
              <div
                type="text"
                name="shooting_place"
                id="shooting_place"
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-center text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
              >
                {{ artworkList.cityShooting }}
              </div>
            </div>
            <!-- //! Accessories -->
            <div
              class="sm:col-start-6 sm:col-end-12 sm:row-start-1 sm:row-end-3"
            >
              <label
                for="Accessories"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >accessories</label
              >
              <div
                type="text"
                id="Accessories"
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-center text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
              >
                {{ artworkList.accessories }}
              </div>
            </div>
            <!-- //! film size -->
            <div
              class="sm:col-start-2 sm:col-end-4 sm:row-start-2 sm:row-end-3"
            >
              <label
                for="film_size"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >film size</label
              >
              <div
                id="film_size"
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
              >
                {{ artworkList.transparencySize }}
              </div>
            </div>
            <!-- //! number of film -->
            <div
              class="sm:col-start-4 sm:col-end-5 sm:row-start-2 sm:row-end-3"
            >
              <label
                for="variations"
                class="block mb-2 text-sm font-medium text-center text-gray-900 input_num dark:text-white"
                >number</label
              >
              <div
                type="number"
                name="film_num"
                id="film_num"
                class="input_num block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-center text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
              >
                {{ artworkList.transparencyNumber }}
              </div>
            </div>
            <!-- //! reproduced -->
            <div
              class="sm:col-start-5 sm:col-end-12 sm:row-start-2 sm:row-end-3"
            >
              <label
                for="reproduced"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >reproduced</label
              >
              <div
                type="text"
                id="reproduced"
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-center text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
              >
                {{ artworkList.reproduced }}
              </div>
            </div>
            <!-- //! photographed  -->
            <div
              class="sm:col-start-2 sm:col-end-4 sm:row-start-3 sm:row-end-4"
            >
              <label
                for="photographed"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >photographed</label
              >
              <div
                id="photographed"
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
              >
                {{ artworkList.artPhotographedAt }}
              </div>
            </div>
            <!-- //! shooting city -->
            <div
              class="sm:col-start-4 sm:col-end-6 sm:row-start-3 sm:row-end-4"
            >
              <label
                for="shootingCity"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >shooting city</label
              >
              <div
                type="text"
                name="shootingCity"
                id="shootingCity"
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-center text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
              >
                {{ artworkList.cityShooting }}
              </div>
            </div>
            <!-- //! number of sitters -->
            <div
              class="sm:col-start-6 sm:col-end-7 sm:row-start-3 sm:row-end-4"
            >
              <label
                for="sitters"
                class="block mb-2 text-sm font-medium text-center text-gray-900 input_num dark:text-white"
                >sitters</label
              >
              <div
                type="number"
                name="sitters"
                id="sitters"
                class="input_num block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-center text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
              >
                {{ artworkList.sitters }}
              </div>
            </div>
            <!-- //! background -->
            <div
              class="sm:col-start-9 sm:col-end-12 sm:row-start-3 sm:row-end-4"
            >
              <label
                for="background"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >background</label
              >
              <div
                id="background"
                type="text"
                name="background"
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-center text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
              >
                {{ artworkList.background ? "Yes" : "No" }}
              </div>
            </div>
               <!-- //! Sitter names  -->
               <div
              class="sm:row-end-9 sm:row-start-8 sm:col-start-2 sm:col-end-12"
            >
              <label
                for="description"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >sitters info</label
              >
              <div
                id="description"
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
              >
                {{ artworkList.names }}
              </div>
            </div>
            <!-- //! film notes  -->
            <div
              class="sm:row-end-9 sm:row-start-8 sm:col-start-2 sm:col-end-12"
            >
              <label
                for="film notes"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >film notes</label
              >
              <div
                id="film notes"
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
              >
                {{ artworkList.noteTransparency }}
              </div>
            </div>
         
          </div>
          <!-- //! control buttons (update - delete - x)  -->
          <div class="flex items-center justify-end space-x-4">
            <!--//! Close button -->
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
