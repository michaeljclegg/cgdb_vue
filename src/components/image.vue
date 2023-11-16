<script lang="ts" setup>
import { ref } from "vue";

const emit = defineEmits(["closeImage"]);
function buttonClose() {
  emit("closeImage");
}

const props = defineProps(["artworkList"]);

// NOTE list of all variables for form 1 (Artwork)
// Shooting Date
const artImage = ref([]); // Shooting Date
artImage.value = props.artworkList.image

;
</script>

<template>
  <!-- Main modal -->

  <div
    id="form4"
    tabindex="-1"
    aria-hidden="true"
    class="flex items-center justify-center w-full overflow-x-hidden overflow-y-auto md:h-full"
  >
    <div class="w-full h-full max-w-2xl p-4 md:h-auto">
      <!-- Modal content -->
      <div
        class="p-4 bg-white border-2 border-gray-100 border-solid rounded-lg drop-shadow-xl dark:bg-gray-800 sm:p-5"
      >
        <!-- Modal header -->

        <!--//! Modal body -->
        <form action="#">
          <!-- //! grid -->

          <div
            class="grid gap-4 p-2 mb-4 bg-gray-300 rounded dark:bg-gray-200 sm:grid-cols-2"
          >
            <div class="sm:col-span-2">
              <figure class="max-w-lg mx-auto">
                <img
                  class="h-auto max-w-full border-2 border-slate-200"
                  src="@\assets\images\The_Cigar_Eaters_19831000.jpg"
                  alt=""
                />
                <figcaption
                  class="mt-2 text-sm text-center text-gray-500 dark:text-gray-400"
                ></figcaption>
              </figure>
            </div>
          </div>

          <!-- //! control buttons (update - delete - x)  -->
          <div class="flex items-center justify-end space-x-4">
            
         
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
