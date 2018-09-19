let array = [12, 653, -3, 76, -9034, -432, 7];
console.log('--------------------------------------');
console.log('all numbers: ');
console.log('--------------------------------------');
for (let i = 0; i < array.length; ++i) {
  console.log(array[i]);
}
console.log();

// вывести на консоль все четные элементы массива
console.log('--------------------------------------');
console.log('even numbers');
console.log('--------------------------------------');
for (let i = 0; i < array.length; ++i) {
  if ((array[i] & 1) == 0) {
    console.log(array[i]);
  }
}
console.log();

console.log('--------------------------------------');
console.log('negative even numbers');
console.log('--------------------------------------');
for (let i = 0; i < array.length; ++i) {
  if (array[i] < 0 && (array[i] & 1) == 0) {
    console.log(array[i]);
  }
}
console.log();

console.log('--------------------------------------');
console.log('negative even and positive odd numbers');
console.log('--------------------------------------');
for (let i = 0; i < array.length; ++i) {
  if ((array[i] < 0 && (array[i] & 1) == 0) || (array[i] >= 0 && (array[i] & 1) == 1)) {
    console.log(array[i]);
  }
}
console.log();
