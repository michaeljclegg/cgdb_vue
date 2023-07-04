<script lang="ts" setup>
//--------------------------------
// COMPARE MATH RANDOM VALUES -
//
// PERFORMANCE .NOW
let count = 1;
function generateValue() {
  // SET Value  toFixed from 2 - 5
  let value = Math.random().toFixed(3);
  // value = Math.round(value)
  return value;
}

const compare = () => {
  let value1 = generateValue();
  let value2 = generateValue();

  while (value1 !== value2) {
    let start = performance.now();
    count++; //?
    console.log(`Values are not the same: ${value1} ${value2}`);
    value1 = generateValue();
    value2 = generateValue();
  }

  let end = performance.now();
  let differencePerformance = Math.round(end - start) / 10;
  const secORmin =
    differencePerformance >= 60
      ? `${(differencePerformance / 60).toFixed(1)}  minutes`
      : `${differencePerformance}  seconds`;
  console.log(count, secORmin);
  console.log("Values same after ", count, "times and\n ", secORmin); //
};
// NOTE - output after value set to 4 figure
// values match after 8284 times 6.6 seconds

//loop a few times (5) to compare results
// nameless IIFE (Immediately Invoked Function Expression)
var loops = 0;
(() => {
  while (loops < 5) {
    compare();
    loops++;
  }
})();
</script>


