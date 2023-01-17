import { ref, computed } from 'vue'
import { defineStore, acceptHMRUpdate } from 'pinia'

export const useCounterStore = defineStore
  ('counter', () => {

    const count = ref(0)

    // const primes = ref<Array<number>>([])
    let primes = new Array<number>();
    let primes2 = new Set<number>();

    const reset = () => {
      count.value = 0
    }
    const get = () => count.value

    const set = (val: number) => count.value = val

    const increment = () => {
      count.value++
    }

    const decrement = () => {
      count.value--
    }

    const cubeCount = computed(() =>
      Math.cbrt(count.value))

    const squareCount = computed(() =>
      Math.sqrt(count.value))

    const doubleCount = computed(() => count.value * 2)

    const powerCount = computed(() =>
      Math.pow(count.value, 2))

    const doublePowerCount = computed(() =>
      Math.pow(count.value, 4))


    return { count, doubleCount, increment, powerCount, doublePowerCount, squareCount, cubeCount, decrement, reset, get, set, primes, primes2 }
  })
export default { useCounterStore }

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useCounterStore, import.meta.hot))
