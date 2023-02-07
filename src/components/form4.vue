<script lang="ts" setup>
const emit = defineEmits(["closeImage"]);
function buttonClose() {
  emit("closeImage");
}
</script>

<template>
  <!-- Main modal -->

  <div
    id="form3"
    tabindex="-1"
    aria-hidden="true"
    class="flex w-full items-center justify-center overflow-y-auto overflow-x-hidden md:h-full"
  >
    <div class="h-full w-full max-w-2xl p-4 md:h-auto">
      <!-- Modal content -->
      <div
        class="relative rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-5"
      >
        <!-- Modal header -->
        <div
          class="mb-4 flex items-center justify-between rounded-t border-b pb-4 dark:border-gray-600 sm:mb-5"
        >
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white"></h3>
          <button
            type="button"
            class="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
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
        <!--//! Modal body -->
        <form action="#">
          <!-- //! grid -->
          <div class="mb-4 grid gap-4 sm:grid-cols-2">
            <div class="sm:col-span-2">
              <figure class="mx-auto max-w-lg">
                <img
                  class="h-auto max-w-full border-2 border-slate-200"
                  src="@\assets\images\The_Cigar_Eaters_19831000.jpg"
                  alt=""
                />
                <figcaption
                  class="mt-2 text-center text-sm text-gray-500 dark:text-gray-400"
                >
                  The Cigar Eaters, 1983
                </figcaption>
              </figure>
            </div>
          </div>
          <div class="flex items-center space-x-4">
            <button
              type="submit"
              class="rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
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
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
