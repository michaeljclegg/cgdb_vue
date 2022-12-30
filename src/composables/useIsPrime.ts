export const isPrime = (num: number): boolean => {
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

// console.log(isPrime(2));
