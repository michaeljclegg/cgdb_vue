export const useConvert = () => {
  const dec2Hex = (a: number): string => {
    let hexString = a.toString(16);
    return hexString.toUpperCase();
  };

  const hex2Decimal = (a: string): number => {
    let decimalNum = parseInt(a, 16);
    return decimalNum;
  };

  const dec2Binary = (a: number): string => {
    let binString = a.toString(2);
    // @ts-ignore
    return formatBinary(binString)
  };

  const bin2Decimal = (a: string): number => {
    let decNumber = parseInt(a, 2);
    return decNumber;
  };

  const formatBinary = (a: number): string => {
    let binaryString = a.toString()
    let n = 4; // the number will result in group split
    for (let i = binaryString.length - n; i > 0; i -= n) {
      binaryString = binaryString.slice(0, i) + " " + binaryString.substring(i);
    }
    return binaryString
  };

  return { dec2Hex, hex2Decimal, dec2Binary, bin2Decimal, formatBinary };

}

// TESTING GROUND
//

// const formatBinary = (a: number): string => {
//   let binaryString = a.toString()
//   let n = 4; // the number will result in group split
//   for (let i = binaryString.length - n; i > 0; i -= n) {
//     binaryString = binaryString.slice(0, i) + " " + binaryString.substring(i);
//     console.log(binaryString);
//   }
//   return binaryString
// };
// console.log(formatBinary(12345));
/*
console.log(dec2Binary(458));
console.log(bin2Decimal(111001010));
console.log(dec2Hex(458));
console.log(hex2Dec("1ca"));
console.log(formatBinary(1234));
*/


// BINARY:
// first position=0 2nd.=2 3rd.=4 5th.=8 6th.=16  7th.=32 8th.=64 9th.=128 10th.= 256 11th.=512 12th.=1024
// MSF:
// 1024 512 256 128  64 32 16  8 4 2 1

// HEXADECIMAL:
// 1-9 10=a 12=b 11=c 13=d 14=e 15=f
// MSF:
// 4096 256 16 1
