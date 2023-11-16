<script setup lang="ts">

import { useDark, useToggle } from "@vueuse/core";
// const isDark = useDark({
//   selector: "body",
//   valueDark: "dark",
//   valueLight: "light",
// });

const toggleDark = useToggle();

</script>

<template>
  <body class="bg-slate-50 text-slate-800 dark:bg-slate-800 dark:text-slate-50">
    <component :is="$route.meta.layout || 'div'"></component>

    <button @click="toggleDark">toggel</button>
   <div class="text-2xl text-black dark:text-white">

    x {{ useDark }}
   </div>
  </body>
</template>

<style>
/* html.dark {
  color-scheme: dark;
} */

/* body {
  @apply bg-slate-50 text-slate-800 dark:bg-slate-800 dark:text-slate-50;
} */

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 5px 10px 5px 10px;
}
</style>
