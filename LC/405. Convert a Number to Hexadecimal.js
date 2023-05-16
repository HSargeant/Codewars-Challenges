// 405. Convert a Number to Hexadecimal

function toHex(num) {
  const Hex = {
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    10: "a",
    11: "b",
    12: "c",
    13: "d",
    14: "e",
    15: "f",
  };
  let res = "";
  if (num === 0) return Hex[0];
  if (num < 0) {
    num += 2 ** 32;
  }
  while (num > 0) {
    let rem = Math.floor(num % 16);
    res = Hex[rem].toString() + res;
    num = Math.floor(num / 16);
  }
  return res;
}