/**
 * My Notes and exercises from JavaScript the Hard Parts course
 *
 * @author Jose Miguel Bonilla Silió
 * @link https://www.jmbs.es/
 * @link https://frontendmasters.com/courses/javascript-hard-parts
 */
// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');

/**
 * Global Execution Context
 *
 * @link https://frontendmasters.com/courses/javascript-hard-parts/global-execution-context/
 *
 */

// What happens when JS executes (run) my code?
/**
 *   It is executed/ processed line by line
 * Assign data to memory labeled by their names, so data is accesible by their names (variables, constants, functions)
 *
 * As soon as we start running our code, we create a Global Execution Context:
 *  - Thread of the execution (parsing and executing the code line after line)
 *  - Live memory of variables with data (known as Global Variable Environment)
 *
 * The thread in JS:
 *  - Single threaded (one thing at a time)
 *  - Synchronous execution (for now)
 */
// 1st) In the *** Global Memory ****, stores 3 in the constant named num
const num = 3;
// 2nd) In the Global Memory, stores F (function) named multiplyByTwo
function multiplyByTwo(inputNumber) {
  // Define the function with the name function
  const result = inputNumber * 2;
  return result;
}
// 3rd) In the Global Memory, stores Jose Miguel Bonilla Silioin the name constant
const name = 'Jose Miguel Bonilla Silio';
/**
 * When we execute a function we create a new Execution Context comprising:
 *  1. The thread of execution (we go through the code in the function line by line)
 *  2. A *** local memory *** (Variable environment) where anything defined in the function is stored
 *
 * To call a function we use the function name and parenthesis()
 */

// 4th) In the Global Memory, first stores undefined the output constant,
// then run the function with the input of 4 multiplyByTwo(4) and assign the result to output
const output = multiplyByTwo(4);
/**
 *  5th)
 *  When we execute a function we create a new Local Execution Context
 * 
 function multiplyByTwo(inputNumber) {
  const result = inputNumber * 2;
  return result;
}
 * 
 * *** Local Memory ***
 *  inputNumber = 4  In the Local Memory, stores 4 in inputNumber variable
 *  result = 8   In the Local Memory, stores 8 in result constant
 *  we return the result value and assign it to output in the Global Memory
 */

// So JS does not run the next line until the previous function is executed.
// 6th) In the Global Memory, first stores undefined the newOutput constant,
/**
 *  we create a new Local Execution Context
 * With new Local Memory (Environment Memory)
 *  inputNumber = 10  In the Local Memory, stores 10 in inputNumber variable
 *  result = 20   In the Local Memory, stores 20 in result constant
 *  we return the result value and assign it to newOutput in the Global Memory
 *
 *
 */
const newOutput = multiplyByTwo(10);

/**
 * Call Stack
 *
 *  Let us know where we are, which line or function are we running
 *
 * 1st) It adds the Global global()
 * 2st) the following thin executed is added to the top of the Call Stack eg:  multiplyByTwo(4)
 * LIFO last inpunt first ouput, meaning that the last thing we added is the first thing going out
 * JS knows where it is executing, looking at the top of the call stack
 * 3rd) When  multiplyByTwo(4) is returned to the global output,  multiplyByTwo(4) is deleted from the call stack (it goes out)  Last in, First out
 * 4th) when we execute multiplyByTwo(10) is pushed to the top of the Call Stack
 * When the function finishes
 * - asign the return valut to newOutput
 * - its local execution context is closed
 * - removed(popped) from the call stack
 * - and call stack return to global()
 *
 * Summary:
 * We keep track of the functions being called in JS with a Call Stack
 *
 * Tracks wich execution context we are in (what function is currently being run) and where to return to after the execution context is popped off the stack.
 *
 * One global execution context, multiple function contexts
 */

/**
 * The implicit return of any function is void
 * It is the default when there is not return declared in the function
 *
 * function fucntionName():void {
 *    console.log('It has not got the return keyword');
 * }
 */

console.log(multiplyByTwo);
/** 
 * Will show the whole funcion in the console 
 * ƒ multiplyByTwo()
name: "multiplyByTwo"
<prototype>: Function
 */

/**
 * JS today uses JIT Just In Time compilation that makes some optimizations
 */

/**
 * Functional programming
 * @link https://frontendmasters.com/courses/javascript-hard-parts/pure-functions/
 *
 * It is a programming paradigm (how we write our code and scales)
 * @see https://en.wikipedia.org/wiki/Functional_programming
 * The most popular programming paradigm is OOP (Object Oriented Programming)
 *
 * Functional programming: Functions are 1st class citizens
 *   1. Pure functions  (no side effects): When I run a function its only consequence is the return value, it does not mutate the global
 *   2. Higher order functions, highly valuable tool
 */

/**
 * Higher order functions
 * Basically, a function which takes another function as an argument or returns a function is known as a higher order function.
 *
 * With a brief exercise, Will reviews high order functions by examining the programming concept of Don't Repeat Yourself (DRY), which is a principle of software development aimed at reducing code repetition by making the code more re-usable.
 *
 * Create a function 10 squared
 * Takes no input
 * returns 10 * 10
 *
 * How we do it?
 */
function tenSquared() {
  return 10 * 10;
}
console.log(tenSquared());
/**
 *  This function violates the DRY Don't Repeat Yourself principle,
 *  if we want to calculate other squares we should repeat the code changing the number
 * so we can generalise the function to pass any number as parameter
 */
function squareNum(num) {
  return num * num;
}
console.log(squareNum(10));
console.log(squareNum(9));
console.log(squareNum(5));

/**
 * Pair programming 
 * @see https://frontendmasters.com/courses/javascript-hard-parts/setting-up-pair-programming/
 * 
 * Answer these:
 * 1. I know what a variable is:
 *  - A variable is a container for a value, like a number we might use in a sum, or a string that we might use as part of a sentence. A variable can contain just about anything — not just strings and numbers. Variables can also contain complex data and even entire functions
 * @link https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables
 * 
 * 2. I have created a function before
 * - // Declaration
      function multiply(x, y) {
        return x * y;
      } // No need for semicolon here

      // Arrow function
      
      const multiply = (x, y) => x * y;
      @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions

  3. I have added CSS style before
 */
document.getElementById('app').classList.add('added');

/**
 * 4. I have implemented a sort algorithm
 * - Bubble
 * Bubble sort algorithm is an algorithm that sorts an array by comparing two adjacent elements and swapping them if they are not in the intended order. Here order can be anything like increasing asc(default) or decreasing.
 */

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let isSwapped = false;

    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwapped = true;
      }
    }

    // IF no two elements were swapped
    // by inner loop, then break
    if (!isSwapped) {
      break;
    }
  }

  // Return the sorted array
  // console.log(arr);
  return arr;
}

const arr = [243, 45, 23, 356, 3, 5346, 35, 5];

// calling the bubbleSort Function
console.log(bubbleSort(arr));
console.log(bubbleSort([6, 1, 2, 5, -2, 3]));

function mergeArrays(leftSubArray, rightSubArray) {
  let array = [];
  while (leftSubArray.length && rightSubArray.length) {
    if (leftSubArray[0] < rightSubArray[0]) {
      array.push(leftSubArray.shift());
    } else {
      array.push(rightSubArray.shift());
    }
  }
  return [...array, ...leftSubArray, ...rightSubArray];
}

/**
 * Declare an array, left index, right index and middle variable.

Perform the merge sorting.
mergesort(array, left index, right index)
if left index > right index
return
mid= (left index + right index) / 2

mergesort(array, left index, mid) // First half
mergesort(array, mid+1, right index) // Second half

merge(array, left index, mid, right index) // merge two halfes sorted in above steps
 */
function mergeSort(unsortedArray) {
  if (unsortedArray.length < 2) {
    return unsortedArray;
  }
  const middleIndex = unsortedArray.length / 2;
  const leftSubArray = unsortedArray.splice(0, middleIndex);
  return mergeArrays(mergeSort(leftSubArray), mergeSort(unsortedArray));
}
unsortedArray = [39, 28, 44, 4, 10, 83, 11];
console.log('The sorted array will be: ', mergeSort(unsortedArray));

function quickSort(unsortedArray) {
  if (unsortedArray.length <= 1) {
    return unsortedArray;
  } else {
    const left = [];
    const right = [];
    const newArray = [];
    const pivot = unsortedArray.pop();
    const length = unsortedArray.length;

    for (var i = 0; i < length; i++) {
      if (unsortedArray[i] <= pivot) {
        left.push(unsortedArray[i]);
      } else {
        right.push(unsortedArray[i]);
      }
    }
    return newArray.concat(quickSort(left), pivot, quickSort(right));
  }
}
const myArray = [13, 50, 45, -1, 74, 11, 78, 5];
const arreySorted = quickSort(myArray);
console.log(arreySorted);

/**
 * 5. I can add a method to an object's prototype
 * 
 * Prototypes are the mechanism by which JavaScript objects inherit features from one another.
 * 
 * @link https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes
 */
 const myObject = {
  city: "Málaga",
  greet() {
    console.log(`Greetings from ${this.city}`);
  },
};

myObject.greet(); // Greetings from Madrid


// Challenge 1
/**
 * Create a function addTwo that accepts one input and adds 2 to it.
 */
function addTwo(num) {
  return 2 + num;
}

// To check if you've completed it, uncomment these console.logs!
console.log(addTwo(3));
console.log(addTwo(10));

// Challenge 2
/**
 * Create a function addS that accepts one input and adds an "s" to it.
 */
function addS(word) {
  return word + 's';
}

// uncomment these to check your work
console.log(addS('pizza'));
console.log(addS('bagel'));

// Challenge 3
/**
 * Create a function called map that takes two inputs:
 * an array of numbers (a list of numbers)
 * a 'callback' function - a function that is applied to each
 * element of the array (inside of the function 'map')
 *
 * Have map return a new array filled with numbers that are  *the result of using the
 * 'callback' function on each element of the input array.
 */
function map(array, callback) {
  const newArray = [];

  for (const element of array) {
    newArray.push(callback(element));
  }
  return newArray;
}

console.log(map([1, 2, 3], addTwo));

function multiplyByTwoOtherWay(num) {
  return num * 2;
}

console.log(map([1, 2, 3, 4, 5], multiplyByTwoOtherWay)); //-> [2,4,6,8,10]
console.log(multiplyByTwoOtherWay(1)); //-> 2
console.log(multiplyByTwoOtherWay(2)); //-> 4

// Challenge 4
/**
 * Create a function called forEach that takes an array and a callback, and runs the
 * callback on each element of the array. forEach does not return anything.
 */
function forEach(array, callback) {
  for (const element of array) {
    callback(element);
  }
}

let alphabet = '';
const letters = ['a', 'b', 'c', 'd'];
forEach(letters, function (char) {
  alphabet += char;
});
console.log(alphabet); //prints 'abcd'

// see for yourself if your forEach works!

// Challenge 5
/**
 * In challenge 3, you've created a function called map. In this challenge, you're going
 * to rebuild the map function by creating a function called mapWith. This time you're
 * going to use forEach inside of mapWith instead of using a for loop
 */
function mapWith(array, callback) {
  const newArray = [];
  forEach(array, callback);

  for (const element of array) {
    newArray.push(callback(element));
  }
  return newArray;
}
console.log(mapWith([1, 2, 3], addS));
console.log(mapWith([1, 2, 3], addTwo));

// Challenge 6
/**
 * Create a function called reduce that takes an array and reduces the elements to a
 * single value. For example it can sum all the numbers, multiply them, or any operation
 * that you can put into a function.
 * 

 * 
*/
function reduce(array, callback, initialValue) {
  let accumulatorValue = initialValue;

  for (const element of array) {
    accumulatorValue = callback(accumulatorValue, element);
  }
  return accumulatorValue;
}

/**
 *  * Here's how it works. The function has an "accumulator value" which starts as the initialValue and accumulates the output of each loop. 

The array is iterated over, passing the accumulator and the next array element as arguments to the callback. 
The callback's return value becomes the new accumulator value. The next loop executes with this new accumulator value. In the example above, the accumulator begins at 0. add(0,4) is called. The accumulator's value is now 4. Then add(4, 1) to make it 5. Finally add(5, 3) brings it to 8, which is returned.
*/
const nums = [4, 1, 3];
const add = function (a, b) {
  return a + b;
};
console.log(reduce(nums, add, 0)); //-> 8

// Challenge 7
/**
 * Construct a function intersection that takes in an array of arrays, compares the inner arrays, and returns a new array with elements found in all of them. BONUS: Use reduce!
 */
function intersection(arrays) {
  return arrays.reduce((firstArray, secondArray) =>
    firstArray.filter((element) => secondArray.includes(element))
  );
}

console.log(
  intersection([
    [5, 10, 15, 20],
    [15, 88, 1, 5, 7],
    [1, 10, 15, 5, 20],
  ])
);
// should log: [5, 15]

// Challenge 8
/**
 * Construct a function union that takes in an array of arrays, compares the inner arrays, and returns a new array that contains all elements. If there are duplicate elements, only add it once to the new array. Preserve the order of the elements starting from the first element of the first array. BONUS: Use reduce!
 */
function union(arrays) {
  return [...new Set([].concat(...arrays))];
}

console.log(
  union([
    [5, 10, 15],
    [15, 88, 1, 5, 7],
    [100, 15, 10, 1, 5],
  ])
);
// should log: [5, 10, 15, 88, 1, 7, 100]

// Challenge 9
function objOfMatches(array1, array2, callback) {}

// console.log(
//   objOfMatches(
//     ['hi', 'howdy', 'bye', 'later', 'hello'],
//     ['HI', 'Howdy', 'BYE', 'LATER', 'hello'],
//     function (str) {
//       return str.toUpperCase();
//     }
//   )
// );
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

// Challenge 10
function multiMap(arrVals, arrCallbacks) {}

// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

// Challenge 11
function objectFilter(obj, callback) {}

// const cities = {
// London: 'LONDON',
// LA: 'Los Angeles',
// Paris: 'PARIS',
// };
// console.log(objectFilter(cities, city => city.toUpperCase())) // Should log { London: 'LONDON', Paris: 'PARIS'}

// Challenge 12
function majority(array, callback) {}

// /*** Uncomment these to check your work! ***/
// const isOdd = function(num) { return num % 2 === 1; };
// console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
// console.log(majority([2, 3, 4, 5], isOdd)); // should log: false

// Challenge 13
function prioritize(array, callback) {}

// /*** Uncomment these to check your work! ***/
// const startsWithS = function(str) { return str[0] === 's' || str[0] === 'S'; };
// console.log(prioritize(['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends'], startsWithS)); // should log:
['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends'];

// Challenge 14
function countBy(array, callback) {}

// /*** Uncomment these to check your work! ***/
// console.log(countBy([1, 2, 3, 4, 5], function(num) {
// if (num % 2 === 0) return 'even';
// else return 'odd';
// })); // should log: { odd: 3, even: 2 }

// Challenge 15
function groupBy(array, callback) {}

// /*** Uncomment these to check your work! ***/
// const decimals = [1.3, 2.1, 2.4];
// const floored = function(num) { return Math.floor(num); };
// console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }

// Challenge 16
function goodKeys(obj, callback) {}

// /*** Uncomment these to check your work! ***/
// const sunny = { mac: 'priest', dennis: 'calculating', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
// const startsWithBird = function(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
// console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']

// Challenge 17
function commutative(func1, func2, value) {}

// /*** Uncomment these to check your work! ***/
// const multBy3 = n => n * 3;
// const divBy4 = n => n / 4;
// const subtract5 = n => n - 5;
// console.log(commutative(multBy3, divBy4, 11)); // should log: true
// console.log(commutative(multBy3, subtract5, 10)); // should log: false
// console.log(commutative(divBy4, subtract5, 48)); // should log: false

// Challenge 18
function objFilter(obj, callback) {}

// /*** Uncomment these to check your work! ***/
// const startingObj = {};
// startingObj[6] = 3;
// startingObj[2] = 1;
// startingObj[12] = 4;
// const half = n => n / 2;
// console.log(objFilter(startingObj, half)); // should log: { 2: 1, 6: 3 }

// Challenge 19
function rating(arrOfFuncs, value) {}

// /*** Uncomment these to check your work! ***/
// const isEven = n => n % 2 === 0;
// const greaterThanFour = n => n > 4;
// const isSquare = n => Math.sqrt(n) % 1 === 0;
// const hasSix = n => n.toString().includes('6');
// const checks = [isEven, greaterThanFour, isSquare, hasSix];
// console.log(rating(checks, 64)); // should log: 100
// console.log(rating(checks, 66)); // should log: 75

// Challenge 20
function pipe(arrOfFuncs, value) {}

// /*** Uncomment these to check your work! ***/
// const capitalize = str => str.toUpperCase();
// const addLowerCase = str => str + str.toLowerCase();
// const repeat = str => str + str;
// const capAddlowRepeat = [capitalize, addLowerCase, repeat];
// console.log(pipe(capAddlowRepeat, 'cat')); // should log: 'CATcatCATcat'

// Challenge 21
function highestFunc(objOfFuncs, subject) {}

// /*** Uncomment these to check your work! ***/
// const groupOfFuncs = {};
// groupOfFuncs.double = n => n * 2;
// groupOfFuncs.addTen = n => n + 10;
// groupOfFuncs.inverse = n => n * -1;
// console.log(highestFunc(groupOfFuncs, 5)); // should log: 'addTen'
// console.log(highestFunc(groupOfFuncs, 11)); // should log: 'double'
// console.log(highestFunc(groupOfFuncs, -20)); // should log: 'inverse'

// Challenge 22
function combineOperations(startVal, arrOfFuncs) {}

function add100(num) {
  return num + 100;
}

function divByFive(num) {
  return num / 5;
}

function multiplyByThree(num) {
  return num * 3;
}

// /*** Uncomment these to check your work! ***/
// console.log(combineOperations(0, [add100, divByFive, multiplyByThree])); // Should output 60 -->
// console.log(combineOperations(0, [divByFive, multiplyFive, addTen])); // Should output 10

// Challenge 23
function myFunc(array, callback) {}

const numbers = [2, 3, 6, 64, 10, 8, 12];
const evens = [2, 4, 6, 8, 10, 12, 64];

function isOdd(num) {
  return num % 2 !== 0;
}

// /*** Uncomment these to check your work! ***/
// console.log(myFunc(numbers, isOdd)); // Output should be 1
// console.log(myFunc(evens, isOdd)); // Output should be -1

// Challenge 24
function myForEach(array, callback) {}

let sum = 0;

function addToSum(num) {
  sum += num;
}

// /*** Uncomment these to check your work! ***/
// const nums = [1, 2, 3];
// myForEach(nums, addToSum);
// console.log(sum); // Should output 6
