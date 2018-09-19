/*
двоичные числа
--------------

десятичноей число | двоичное число
0                 | 0000
1                 | 0001
2                 | 0010
3                 | 0011
4                 | 0100
5                 | 0101
6                 | 0110
7                 | 0111
8                 | 1000
9                 | 1001
10                | 1010
11                | 1011
...

бинарные операторы AND и OR
---------------------------

побитовое И:
1010 &
1011
----
1010

побитовое ИЛИ:
1010 |
1011
----
1011

примеры:
0111 & 1 -> 0001
1010 & 1 -> 0000
0111 | 1 -> 0111
1010 | 1 -> 1011

логические (булевские) операторы AND и OR
-----------------------------------------

логическое И:
true  && true  -> true
false && true  -> false
true  && false -> false

логическое ИЛИ:
true  || true  -> true
false || true  -> true
true  || false -> true
*/

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

// вывести на консоль все отрицательные четные элементы массива
console.log('--------------------------------------');
console.log('negative even numbers');
console.log('--------------------------------------');
for (let i = 0; i < array.length; ++i) {
  if (array[i] < 0 && (array[i] & 1) == 0) {
    console.log(array[i]);
  }
}
console.log();

// вывести на консоль все отрицательные четные и положительные нечетные элементы массива
console.log('--------------------------------------');
console.log('negative even and positive odd numbers');
console.log('--------------------------------------');
for (let i = 0; i < array.length; ++i) {
  if ((array[i] < 0 && (array[i] & 1) == 0) || (array[i] >= 0 && (array[i] & 1) == 1)) {
    console.log(array[i]);
  }
}
console.log();
