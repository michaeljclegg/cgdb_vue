export const dec2Bin = (a: number) => {
  let binary = "";
  while (a > 0) {
    binary = (a % 2) + binary;
    a = Math.floor(a / 2);
  }
  return binary;
};
// console.log(dec2Bin(2));
// console.log(dec2Bin(27));
