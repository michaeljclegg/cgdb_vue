<script lang="ts" setup>
import { useCollection } from "../stores/collection";
import { ref, computed, onMounted, watch } from "vue";
import display from "@/components/display.vue";
import prints from "@/components/prints.vue";
import details from "@/components/details.vue";
import image from "@/components/image.vue";
import { useRouter } from "vue-router";
// import artworks from "@/components/artworks.vue";
// import useLowerCase from "@/composables/firestore/useLowerCase";

const col = useCollection();
// const artPiece = ref({})
// const fileID = ref(null)
// const isPending = ref(false)

const currentTab = ref("display");

const tabs = {
  display,
  prints,
  details,
  image,
};

onMounted(() => {
  col.getColl();
  // console.log("artwork2: ", col.artwork );
});

const artworkList = ref([]);
artworkList.value = col.artwork;
// console.log(artworkList.value);
const currentArtwork = ref({});
const currentIndex = ref(0);
let currentRecord = ref();

watch(currentIndex, (newIndex) => {
  currentRecord.value = artworkList.value[newIndex];
  console.log('currentRecord.value : ', currentRecord.value );
});

// console.log(artworkList.value[currentIndex.value]);
// console.log('col.artwork.length: ', artworkList.value[0]);
// console.log(currentIndex.value);

const previousRecord = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
};

const nextRecord = () => {
  if (currentIndex.value < artworkList.value.length - 1) {
    currentIndex.value++;
  }
};

const firstRecord = () => {
  if (currentIndex.value !== 0) {
    currentIndex.value = 0;
  }
};

const lastRecord = () => {
  if (currentIndex.value !== artworkList.value.length - 1) {
    currentIndex.value = artworkList.value.length - 1;
  }
};

const router = useRouter();
const navigateToHome = () => {
  router.push("/");
};
</script>

<template>
  <div class="mb-4 flex flex-row items-center justify-center">
    <button
      v-for="(_, tab) in tabs"
      :key="tab"
      :class="['tab-button', { active: currentTab === tab }]"
      class="block bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      @click="currentTab = tab"
    >
      {{ tab }}
    </button>
  </div>

  <div v-if="col.artwork.length">
    <!-- <div v-for="art in artworkList" :key="art.index"> -->
    <div
      v-for="art in [artworkList[currentIndex]]"
      :key="artworkList[currentIndex]"
    >
      <p>Record {{ currentIndex + 1 }} of {{ artworkList.length }}</p>
      <div class="text-center">{{ art.title }}</div>
      <component
        :is="tabs[currentTab]"
        :artworkList="art"
        class="tab"
      ></component>
      <!-- //! pagination (out of body)-->
      <nav aria-label="Page navigation example">
        <ul class="mt-2 inline-flex -space-x-px">
          <li>
            <a
              href="#"
              @click="previousRecord"
              class="ms-0 flex h-10 items-center justify-center rounded-s-lg border border-e-0 border-gray-300 bg-white px-4 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span class="sr-only">Previous</span>
              <svg
                class="h-3 w-3 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="#"
              @click="firstRecord"
              class="flex h-10 items-center justify-center border border-gray-300 bg-white px-4 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >First</a
            >
          </li>
          <li>
            <a
              href="#"
              @click="navigateToHome"
              aria-current="page"
              class="z-10 flex h-10 items-center justify-center border border-blue-300 bg-blue-50 px-4 leading-tight text-blue-600 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              >X</a
            >
          </li>
          <li>
            <a
              href="#"
              @click="lastRecord"
              class="flex h-10 items-center justify-center border border-gray-300 bg-white px-4 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >Last</a
            >
          </li>

          <li>
            <a
              href="#"
              @click="nextRecord"
              class="flex h-10 items-center justify-center rounded-e-lg border border-gray-300 bg-white px-4 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span class="sr-only">Next</span>
              <svg
                class="h-3 w-3 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
