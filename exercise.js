function sum(...num) {
  return num.reduce((a, b) => a + b, 0);
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));