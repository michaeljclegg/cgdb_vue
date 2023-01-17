<script lang="ts" setup>
import { ref } from "vue";
const isOpen = ref(false);
let cleggFirstName = ref("mike");
//--------------------------------
// COMPARE -

var loops = 0;
(() => {
  while (loops < 5) {
    console.log("number of ", loops);
    loops++;
  }
})();

const handeledMe = () => {
  console.log("you touched", isOpen.value);
  isOpen.value = true;
};

// IIFE;
(() => {})();
// or verbose
+(function () {
  console.log("Unary PLUS operator starts the expression");
})();
</script>

<template>
  <body>
    <div class="cards">
      <div
        class="card"
        @click="handeledMe"
        :class="{ open: isOpen }"
        data-description="Wes is cool"
      >
        <img src="https://picsum.photos/200?random=1" alt="Wes Bos" />
        <h2>Wes Bos</h2>
        <button>Learn more →</button>
      </div>
      <div class="card" @click="handeledMe" data-description="Scott is neat!">
        <img src="https://picsum.photos/200?random=2" alt="Wes Bos" />
        <h2>Scott Tolinski</h2>
        <button>Learn more →</button>
      </div>
      <div
        class="card"
        @click="handeledMe"
        data-description="Kait is beautiful!"
      >
        <img src="https://picsum.photos/200?random=3" alt="Wes Bos" />
        <h2>Kait Bos</h2>
        <button>Learn more →</button>
      </div>
      <div
        class="card"
        @click="handeledMe"
        data-description="Snickers is a dog!"
      >
        <img src="https://picsum.photos/200?random=4" alt="Wes Bos" />
        <h2>Snickers the dog</h2>
        <button>Learn more →</button>
      </div>
    </div>
    <div class="modal-outer">
      <div class="modal-inner">test 123</div>
    </div>
  </body>
</template>

<style scoped>
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
  padding: 2rem;
}
.card {
  background: white;
  padding: 1rem;
  border-radius: 2px;
}
.card img {
  width: 100%;
}
.card h2 {
  color: black;
}

.modal-outer {
  display: grid;
  background: hsla(50, 100%, 50%, 0.6);
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  /* hide this modal until we need it */
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s;
}

.modal-outer .open {
  opacity: 1;
  pointer-events: all;
}
.modal-inner {
  max-width: 600px;
  min-width: 400px;
  padding: 2rem;
  border-radius: 5px;
  min-height: 200px;
  background: rgb(223, 179, 179);
}
</style>
