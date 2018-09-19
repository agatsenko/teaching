///////////////////////////////////////////////////////////////////
// циклы for, while, do/while

// задание массива строк
let array = ["one", "two", "three", "four", "five"];
console.log('length of array: ' + array.length)
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log();

// вывод эелементов массива в отдельной строке в цикле for
console.log('------------------------------------------------');
console.log('loop for');
console.log('------------------------------------------------');
for (let index = 0; index < array.length; ++index) {
  console.log(array[index]);
}
console.log();

// вывод эелементов массива в отдельной строке в цикле while
console.log('------------------------------------------------');
console.log('loop while');
console.log('------------------------------------------------');
let arrayIndex = 0;
while(arrayIndex < array.length) {
  console.log(array[arrayIndex]);
  // arrayIndex++;
  // ++arrayIndex;
  arrayIndex = arrayIndex + 1;
}
console.log();

// вывод эелементов массива в отдельной строке в цикле do/while
console.log('------------------------------------------------');
console.log('loop do/while');
console.log('------------------------------------------------');
arrayIndex = 0;
do {
  console.log(array[arrayIndex]);
  //arrayIndex++;
  //++arrayIndex;
  arrayIndex = arrayIndex + 1;
} while (arrayIndex < array.length);
console.log();
