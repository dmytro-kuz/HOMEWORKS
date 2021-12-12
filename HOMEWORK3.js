// ************** Task1 **************
// a) For loop
let arr = [2, 3, 4, 5];
let result = 1;
for (let i = 0; i < arr.length; i++) {
  result *= arr[i];
}
console.log(result);

// b) While loop
let result1 = 1;
let i1 = 0;
while (i1 < arr.length) {
  result1 *= arr[i1];
  i1++;
}
console.log(result1);

// ************** Task2 **************
for (let i = 0; i <= 15; i++) {
  if (i % 2 === 0) {
    console.log(i + " is even");
  } else {
    console.log(i + " is odd");
  }
}

// ************** Task3 **************
let arr1 = [];
function randArray(quantity) {
  for (let i = 0; i <= quantity; i++) {
    arr1[i] = getRandom();
    function getRandom(min = 1, max = 500) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
  }
  return arr1;
}
console.log(randArray(5));

// ************** Task4 **************
function raiseToDegree(a, b) {
  a = prompt("Введіть число");
  b = prompt("Введіть степінь");
  if (a % 1 !== 0 || b % 1 !== 0) {
    //варіант з умовним оператором
    console.log("Функція працює тільки з цілими числами");
  } else {
    result = a ** b;
    return result;
  }
  //   result = Math.round(a) ** Math.round(b);      //варіант з заокругленям введених даних
  //    return result;
}
console.log(raiseToDegree(3, 4));

// ************** Task5 **************
findMin(12, 14, 4, -4, 0.2);
function findMin() {
  let min = Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (min > arguments[i]) {
      min = arguments[i];
    }
  }
  return min;
}
console.log(findMin(12, 14, 4, -4, 0.2)); // => -4

// ************** Task6 **************
function findUnique(arr) {
  let k = [];
  for (let i = 0; i < arr.length; i++) {
    k = arr.sort();
    if (k[i] === k[i + 1]) {
      return false;
    } else if (k[i] !== k[i + 1] && k[i + 1] === undefined) {
      return true;
    }
  }
}
console.log(findUnique([1, 2, 3, 5, 3])); // => false
console.log(findUnique([1, 2, 3, 5, 11])); // => true

// // ************** Task7 **************
function lastElem(arr2, item) {
  if (item === undefined) {
    item = 1;
  }
  let newArr = arr2.slice(-1 * item);
  return newArr;
}
console.log(lastElem([3, 4, 10, -5])); // -5
console.log(lastElem([3, 4, 10, -5], 2)); // [10, -5]
console.log(lastElem([3, 4, 10, -5], 8)); // [3, 4, 10, -5]

// ************** Task8 **************
let str = "i love java script";

function strToUpCase(str) {
  let newStr = "";
  for (i = 0; i < str.length; i++) {
    if (str[i - 1] === " " || i === 0) {
      newStr += str[i].toUpperCase();
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}
console.log(strToUpCase(str));
