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
   
          <!-- //! grid -->
          <div
            class="grid p-2 mb-4 bg-gray-300 rounded gap-x-4 gap-y-3 dark:bg-gray-700 sm:grid-cols-12"
          >
                    <!-- //! material -->
                    <div
              class="sm:col-start-2 sm:col-end-5 sm:row-start-1 sm:row-end-2"
            >
              <label
                for="material"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >material</label
              >
              <div
                id="material"
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
              >{{ artworkList.material }}</div>
              </div>
              <!-- //! framed -  -->
              <div
              class="sm:col-start-6 sm:col-end-8 sm:row-start-1 sm:row-end-2"
            >
              <label
                for="radio-2"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >framed</label
              >
              <div
                id="radio-2"
                type="radio"
                name="radio2"
                class="block w-full p-3 text-sm text-gray-900 rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white"
              >{{ artworkList.framed? 'Framed' : 'Unframed' }}</div>
            </div>
            <!-- //! Gener -->
            <div
              class="sm:col-start-9 sm:col-end-12 sm:row-start-1 sm:row-end-2"
            >
              <div
                for="gener"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >gener</div
              >
              <div
                id="gener"
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
              >{{ artworkList.gener }}</div>
              </div>
              <!-- //! mounting -->
              <div
              class="sm:col-start-2 sm:col-end-5 sm:row-start-2 sm:row-end-3"
            >
              <label
                for="mounting"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >mounting</label
              >
              <div
                id="mounting"
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
              >{{ artworkList.mounting }}</div>
              </div>
              <!-- extra div? bellow -->
            
            <!-- //! Laminated - -->
            <div
              class="sm:col-start-6 sm:col-end-8 sm:row-start-2 sm:row-end-3"
            >
              <label
                for="radio-2"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >laminated</label
              >
              <div
                id="radio-2"
                value="false"
                name="radio2"
                class="block w-full p-3 text-sm text-gray-900 rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white"
              >{{ artworkList.laminated }}</div>
            </div>
            <!-- //! category -->
            <div
              class="sm:col-start-9 sm:col-end-12 sm:row-start-2 sm:row-end-3"
            >
              <label
                for="category"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >category</label
              >
              <div
                id="category"
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
              >{{ artworkList.category }}</div>
            </div>
            <!-- //! condition -->
            <div
              class="sm:col-start-2 sm:col-end-5 sm:row-start-3 sm:row-end-4"
            >
              <label
                for="condition"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >condition</label
                >
                <div
                id="condition"
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                >{{ artworkList.condition }}</div>
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
              >{{ artworkList.sitters }}</div>
            </div>
            <!-- //! type -->
            <div
              class="sm:col-start-9 sm:col-end-12 sm:row-start-3 sm:row-end-4"
            >
              <label
                for="type"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >type</label
              >
              <div
                id="type"
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
              >{{ artworkList.type }}</div>
            </div>
            <!-- //! location city -->
            <div
              class="sm:col-start-2 sm:col-end-5 sm:row-start-4 sm:row-end-5"
            >
              <label
                for="locationCity"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >location city</label
              >
              <div
                type="text"
                name="locationCity"
                id="locationCity"
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-center text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                placeholder="New York"
              >{{ artworkList.city }}</div>
            </div>
            <!-- //! panels -->
            <div
              class="sm:col-start-6 sm:col-end-7 sm:row-start-4 sm:row-end-5"
            >
              <label
                for="panels"
                class="block mb-2 text-sm font-medium text-gray-900 input_num dark:text-white"
                >panels</label
              >
              <div
                type="number"
                min="1"
                max="8"
                name="panels"
                id="panels"
                class="input_num block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-center text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
              >{{ artworkList.panels }}</div>
            </div>

            <!-- //! sub type -->
            <div
              class="sm:col-start-9 sm:col-end-12 sm:row-start-4 sm:row-end-5"
            >
              <label
                for="sub type"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >sub type</label
              >
              <div
                id="sub type"
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
              >{{ artworkList.subtype }}</div>
            </div>

            <!-- //! Print Notes  -->
            <div
              class="sm:row-end-9 sm:row-start-8 sm:col-start-2 sm:col-end-12"
            >
              <label
                for="description"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >print notes</label
              >
              <div
                id="description"
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
              >{{ artworkList.notePrint }}</div>
             </div>
   
        </div>

         <!-- move grid to bellow this line -->
        </div>
      </div>
             <!-- //! control buttons (update - delete - x)  -->
          <div class="flex items-center justify-end space-x-4">
        
          
            <!--//! Close button -->
    
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
