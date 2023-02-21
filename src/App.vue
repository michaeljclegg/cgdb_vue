<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark({
  selector: "body",
  attribute: "color-scheme",
  valueDark: "dark",
  valueLight: "light",
});

const toggleDark = useToggle(isDark);
</script>

<template>
  <body color-scheme="light">
    <component :is="$route.meta.layout || 'div'"></component>
    <button @click="toggleDark()">mode=></button>
    <span class="ml-2">{{ isDark ? "Dark" : "Light" }}</span>
    <!-- <p class="btn-primary">button</p> -->
  </body>
</template>

<style>
.dark {
  background: #252525;
  color: white;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 5px 10px 5px 10px;
}
</style>
<!-- .active {
  color: #42b983;
}

.exact-active-link {
  color: #42b983;
  font-weight: bold;
} -->
