import { useCounterStore } from "../stores/counter";
const store = useCounterStore();

export const useIsPrimeFunctions = () => {

  const isPrime = (num: number): boolean => {
    // console.log("run", num);
    if (num <= 1) return false;

    // The check for the num 2 and 3
    if (num <= 3)
      return true;

    if (num % 2 == 0 || num % 3 == 0)
      return false;

    for (var i = 5; i * i <= num; i = i + 6) {
      if (num % i == 0 || num % (i + 2) == 0)
        return false;
    }
    return true;
  };

  const savePrimes = () => {
    // F access prime set stored in counter store (pinia)
    console.log(store.primes)
    // convert set to an array to allow proper stringify...
    let newArray = JSON.stringify(Array.from(store.primes2))
    let text = JSON.stringify(newArray);
    let filename = 'primes.json';
    let element = document.createElement('a');
    element.setAttribute('href', 'data:application/json;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();
    document.body.removeChild(element);
  }

  return { isPrime, savePrimes }
}

// console.log(isPrime(2));
