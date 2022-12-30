<script setup lang="ts">
import { useCounterStore } from "../stores/counter";
import { isPrime } from "../composables/useIsPrime";
import { useConvert } from "../composables/useConvertBinHex";
import { useIntervalFn } from "@vueuse/core";
import { ref, watchEffect, onMounted, onUnmounted } from "vue";

const convert = useConvert();
const store = useCounterStore();

const { pause, resume, isActive } = useIntervalFn(() => {
  // console.log("interval is 750ms.!");
  store.increment();
}, 750);

// build prime list in counter store - primes Array (temp) & primes2 Set (to local storage).
watchEffect(() => {
  if (isPrime(store.count)) {
    store.primes.add(store.count);
    store.primes2.add(store.count);
    console.log(store.primes);
  }
});

onMounted(() => {
  // console.log("unMounted - addEventLister - MouseWheel");
  window.addEventListener("mousewheel", onMouseWheel);
});

// TODO send primes2 Set to file (or local storage)
onUnmounted(() => {
  console.log("onUnmounted - removeEventLister....");
  window.removeEventListener("mousewheel", onMouseWheel);
  // F get list of values (key in JS Set) ->
  // for (const [key, value] of store.primes2.entries()) {
  //   console.log(key);
  // }
});

const deltaY = ref(0);

const onMouseWheel = (event) => {
  deltaY.value = event.deltaY;
  // console.log("deltaY.value: ", deltaY.value);
  if (deltaY.value === 100) {
    store.count--;
  } else if (deltaY.value === -100) {
    store.count++;
  }
};

const refreshList = () => {
  store.count = store.count - 1;
  store.count = store.count + 1;
  console.log("refreshed list count is: ", store.count);
};
</script>

<template>
  <main
    class="m-auto mb-8 max-w-sm overflow-hidden rounded-md bg-red-300 shadow-lg"
  >
    <div
      class="mt-4 mb-4 flex items-center justify-center font-semibold text-red-600"
    ></div>
    <div
      class="flex flex-col items-center justify-center font-semibold text-blue-600"
    >
      <!-- F NUMBER -->
      <button
        class="mb-4 rounded border border-blue-500 bg-red-400 py-2 px-4 text-2xl font-semibold text-gray-100 hover:border-white hover:bg-blue-500 hover:text-white"
        @click="store.increment"
        @click.right="store.decrement"
      >
        {{ store.count }}
      </button>
      <!-- F CUBE-->
      <div class="group relative">
        <p class="group-hover:opacity-0">
          {{ store.cubeCount.toLocaleString() }}
        </p>
        <div
          class="duration-400 absolute inset-x-0 bottom-0 flex items-end justify-center text-[16px] text-black opacity-0 ease-in-out group-hover:opacity-100"
        >
          cube
        </div>
      </div>
      <!-- F SQUARE-->
      <div class="group relative">
        <p class="group-hover:opacity-0">
          {{ store.squareCount.toLocaleString() }}
        </p>
        <div
          class="duration-400 absolute inset-x-0 bottom-0 flex items-end justify-center text-[16px] text-black opacity-0 ease-in-out group-hover:opacity-100"
        >
          square
        </div>
      </div>
      <!-- F DOUBLE-->
      <div class="group relative">
        <p class="group-hover:opacity-0">{{ store.doubleCount }}</p>
        <div
          class="duration-400 absolute inset-x-0 bottom-0 flex items-end justify-center text-[16px] text-black opacity-0 ease-in-out group-hover:opacity-100"
        >
          double
        </div>
      </div>
      <!-- F POWER 2-->
      <div class="group relative">
        <p class="group-hover:opacity-0">
          {{ store.powerCount.toLocaleString() }}
        </p>
        <div
          class="duration-400 absolute inset-x-0 bottom-0 flex items-end justify-center text-[16px] text-black opacity-0 ease-in-out group-hover:opacity-100"
        >
          power2
        </div>
      </div>
      <!-- F POWER 4-->
      <div class="group relative">
        <p class="group-hover:opacity-0">
          {{ store.doublePowerCount.toLocaleString() }}
        </p>
        <div
          class="duration-400 absolute inset-x-0 bottom-0 flex items-end justify-center text-[16px] text-black opacity-0 ease-in-out group-hover:opacity-100"
        >
          power4
        </div>
      </div>
      <!-- F BINARY-->
      <div class="group relative">
        <p class="group-hover:opacity-0">
          {{ convert.dec2Binary(store.count) }}
        </p>
        <div
          class="duration-400 absolute inset-x-0 bottom-0 flex items-end justify-center text-[16px] text-black opacity-0 ease-in-out group-hover:opacity-100"
        >
          binary
        </div>
      </div>
      <!-- F HEX-->
      <div class="group relative">
        <p class="group-hover:opacity-0">
          {{ convert.dec2Hex(store.count) }}
        </p>
        <div
          class="duration-400 absolute inset-x-0 bottom-0 flex items-end justify-center text-[16px] text-black opacity-0 ease-in-out group-hover:opacity-100"
        >
          hexadecimal
        </div>
      </div>
      <!-- F PRIME / NOT PRIME-->
      <div
        :class="{ highlife: isPrime(store.count) }"
        class="bg-[rgb(59 130 246)] mt-6 rounded bg-transparent py-2 px-4 font-light text-gray-500"
      >
        {{ isPrime(store.count) ? "prime" : "not prime" }}
      </div>
      <!-- F INPUT WHEEL -->
      <div class="mt-4 rounded-full bg-green-400">
        <div class="m-4 mt-8 p-1">
          <p class="text-center text-red-700">use wheel</p>
          <input
            type="text"
            class="unstyled w-10 bg-green-400 text-center text-gray-200"
            v-model="store.count"
            @wheel="onMouseWheel(event)"
            @keyup="refreshList()"
          />
        </div>
      </div>
      <!-- F RESET - SET(100)-->
      <button
        class="mt-8 rounded border border-gray-600 bg-transparent py-2 px-5 font-thin text-slate-700 hover:border-white hover:bg-blue-500 hover:text-white"
        @click="store.reset(), store.primes.clear()"
        @dblclick="store.set(100)"
      >
        reset
      </button>
      <!-- F PAUSE/RESUME-->
      <button
        v-if="isActive"
        class="mt-8 rounded border border-gray-600 bg-red-400 py-2 px-4 font-thin text-slate-700 hover:border-white hover:bg-blue-500 hover:text-white"
        @click="pause"
      >
        pause
      </button>
      <button
        v-if="!isActive"
        class="mt-8 rounded border border-gray-600 bg-red-400 py-2 px-4 font-thin text-slate-700 hover:border-white hover:bg-blue-500 hover:text-white"
        @click="resume"
      >
        resume
      </button>
      <!-- F SHOW collected PRIME numbers-->
      <div v-if="store.primes.size > 0">
        <p class="text-sm font-thin">
          {{ store.primes }}
        </p>
        <p class="text-sm font-thin text-red-500">{{ store.primes.size }}</p>
      </div>
      <p class="text-sm font-thin text-black">{{ store.primes2 }}</p>
    </div>
  </main>
</template>

<style>
.highlife {
  background-color: rgb(59 130 246);
  color: white;
  font-weight: bold;
}
input {
  display: inline-block;
  border: 0;
  outline: 0;
  width: 30%;
  font-family: "Oswald", sans-serif;
}
input:focus {
  outline: 0 solid transparent;
}

.unstyled: focus {
  outline: 0 solid transparent;
}
</style>
