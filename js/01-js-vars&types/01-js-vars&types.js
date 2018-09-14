/*
  * О программировании - https://karmazzin.gitbooks.io/eloquentjavascript_ru/content/chapters/chapter0.html
  * Величины, типы и операторы - https://karmazzin.gitbooks.io/eloquentjavascript_ru/content/chapters/chapter1.html
  * Структура программ - https://karmazzin.gitbooks.io/eloquentjavascript_ru/content/chapters/chapter2.html
*/

///////////////////////////////////////////////////////////
// numbers
var number = 10;
let number2 = 10.4;
const NUMBER3 = 10.45e+2;

console.log(`number = ${number}, number2 = ${number2}, number3 = ${NUMBER3}`);

let newNumber = (number + number2) * 100 - NUMBER3 / (3 - 1.345);
console.log(`newNumber: ${newNumber}`);

number = 20;
number2 = 20.40;
// NUMBER3 = 1848; // error
console.log(`number = ${number}, number2 = ${number2}, number3 = ${NUMBER3}`);

number = 'ten';
console.log(`number = ${number}, number2 = ${number2}, number3 = ${NUMBER3}`);

///////////////////////////////////////////////////////////
// string
let string = "string";
let string2 = 'string2';

console.log(`string + string2 + NUMBER3 = ${string + string2 + NUMBER3}`);

let string3 = `template string (string2 = ${string2}, special symbols: $$ {, })`;
let num2PlusNum3 = `number2 + NUMBER3 = ${number2 + NUMBER3}`;

console.log(`string = ${string}, string2 = ${string2}, string3 = ${string3}, num2PlusNum3 = ${num2PlusNum3}`);

///////////////////////////////////////////////////////////
// boolean
let boolean = true;
let boolean2 = false;

console.log(`boolean = ${boolean}, boolean2 = ${boolean2}`);

///////////////////////////////////////////////////////////
// array
let array = [4, 3, 2, 1];     // array of numbers
let array2 = [1, true, 'test', [1.2, 34.56], { feild1: 'value1', field2: 2 }];

console.log(`array = ${array}, array2 = ${array2}`);

// add 1848 to end of array
array.push(1848);
console.log(`array = ${array}`);
// remove second item
array.splice(1, 1);
console.log(`array = ${array}`);
// sort items
array.sort((n1, n2) => {
  let result;
  if (n1 > n2) {
    result = -1;
  }
  else if (n1 < n2) {
    result = 1;
  }
  else {
    result = 0;
  }
  return result;
});
console.log(`array = ${array}`);

///////////////////////////////////////////////////////////
// object
let obj = {
  numberField: 10,
  booleanField: true,
  stringField: 'Hello World !!!',
  arrayField: [1, 2, 3],
  objField: {
    field1: 1,
    field2: 'two'
  },
  myFunction: function() {
    console.log("Hello World");
  }
};
obj.objField.field1 = 1848;
obj.myFunction();
console.log(`obj = ${obj}, obj.numberField = ${obj.numberField}, obj.objField.field1 = ${obj.objField.field1}`);

console.log(`obj.newField = ${obj.newField}`);
obj.newField = 1848;
console.log(`obj.newField = ${obj.newField}`);
delete obj.newField;
console.log(`obj.newField = ${obj.newField}`);

///////////////////////////////////////////////////////////
// undefined

let v = undefined;
console.log(`undefined value: ${v}`);

v = 1848;
console.log(`defined value: ${v}`);

///////////////////////////////////////////////////////////
// null

let nullVar = null;
console.log(`null value: ${nullVar}`);

nullVar = 4818;
console.log(`not null value: ${nullVar}`);
