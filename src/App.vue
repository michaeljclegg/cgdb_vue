<script setup lang="ts">

// const db = firebase.firestore();
</script>

<template>
  <component :is="$route.meta.layout || 'div'"></component>
  <!-- <p class="btn-primary">button</p> -->
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 5px 10px 5px 10px;
}
</style>
