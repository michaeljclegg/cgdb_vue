<script lang="ts" setup>
import { ref, computed } from "vue";

const register = ref(false);
const email = ref("");
const password = ref("");

const formTitle = computed(() => {
  return register.value ? "Register" : "Login";
});
</script>

<template>
  <header class="sticky top-0 bg-blue-200 shadow-lg">
    <nav
      class="container flex flex-col items-center justify-center gap-4 py-6 text-white sm:flex-row"
    >
      <a
        @click.prevent="register = false"
        class="flex items-center gap-3 text-[20px] visited:bg-green-500 active:bg-red-600"
        >login</a
      >
      <a
        @click.prevent="register = true"
        class="flex items-center gap-3 text-[20px] active:bg-red-600"
        >register</a
      >
    </nav>
  </header>
  <body
    class="m-auto grid max-w-[400px] grid-cols-1 place-content-center bg-blue-300 p-12"
  >
    <h3>{{ formTitle }}</h3>
    <form @submit.prevent="onSubmit">
      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input
            v-model="email"
            class="input"
            placeholder="e.g. alexsmith@gmail.com"
            type="email"
          />
        </div>
      </div>

      <div class="field">
        <label class="label">Password</label>
        <div class="control">
          <input
            v-model="password"
            class="input"
            placeholder="Enter a password"
            type="password"
          />
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <p class="control">
          <button class="button is-primary">
            {{ formTitle }}
          </button>
        </p>
      </div>

      <!-- <div v-if="error" class="error">{{ error }}</div> -->
      <!-- <button v-if="!isPending">Log in</button>
    <button v-if="isPending" disabled>Loading</button> -->
    </form>
  </body>
</template>

<style scoped></style>
