<script lang="ts" setup>
import { ref, reactive, computed } from "vue";
import { useStoreAuth } from "@/stores/storeAuth";

const storeAuth = useStoreAuth();
const register = ref(true);

const formTitle = computed(() => {
  return register.value ? "Register" : "Sign in";
});

const credentials = reactive({
  email: "",
  password: "",
});
// submit form action.
const onSubmit = () => {
  if (!credentials.email || !credentials.password) {
    alert("Please enter email & password");
  } else {
    if (register.value) {
      console.log("user register with", credentials);
      storeAuth.registerUser(credentials);
    } else {
      console.log("user login with", credentials);
      storeAuth.loginUser(credentials);
    }
  }
};

const deleteUser = () => {
  storeAuth.logoutUser();
};
</script>

<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div
      class="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0"
    >
      <div
        class="w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0"
      >
        <div class="space-y-4 p-6 sm:p-8 md:space-y-6">
          <h1
            class="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl"
          >
            {{ formTitle }} {{ register }}
          </h1>
          <form class="space-y-4 md:space-y-6" @submit.prevent="onSubmit">
            <div>
              <!-- <label
                for="email"
                class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >email</label
              > -->
              <input
                v-model="credentials.email"
                type="email"
                name="email"
                id="email"
                placeholder="name@gmail.com"
                required=""
                class="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <!-- <label
                for="password"
                class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >password</label
              > -->
              <input
                v-model="credentials.password"
                type="password"
                name="password"
                id="password"
                placeholder="password"
                required=""
                class="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
              />
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-start">
                <div class="flex h-5 items-center">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    class="focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 h-4 w-4 rounded border border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                    required=""
                  />
                </div>
                <div class="ml-3 text-sm">
                  <label for="remember" class="text-gray-500 dark:text-gray-300"
                    >Remember me</label
                  >
                </div>
              </div>
              <a
                @click="deleteUser()"
                href="#"
                class="dark:text-primary-500 text-sm font-medium text-slate-600 hover:underline"
                >Forgot password?/ logout</a
              >
            </div>
            <button
              type="submit"
              class="border-light-500 hover:bg-primary-700 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 text-1xl w-full rounded-lg border-2 bg-slate-400 px-5 py-2.5 text-center font-medium text-gray-200 focus:outline-none focus:ring-4"
            >
              {{ formTitle }}
            </button>
            <hr />
            <a
              v-if="!register"
              @click.prevent="register = true"
              href="#"
              class="dark:text-primary-500 text-sm font-medium text-slate-600 hover:underline"
              >Don't have an account?</a
            >
            <a
              v-else
              @click.prevent="register = false"
              href="#"
              class="text-primary-600 dark:text-primary-500 font-medium hover:underline"
              >sign in</a
            >
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
/* <!-- <form> //! EXAMPLE OF DISABLED AND INVALID CLASSES FOR EMAIL... CAN USE??
  <label class="block">
    <span class="block text-sm font-medium text-slate-700">Username</span>
    <!-- Using form state modifiers, the classes can be identical for every input -->
    <input type="text" value="Michael" disabled class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "/>
  </label>
  <!-- ... -->
</form> --> */
</style>
