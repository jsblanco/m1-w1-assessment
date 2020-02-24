// Write a function that returns the product of 2 numbers
function product(x, y) {
  let result = false
  if (typeof(x)  === "number" && typeof(y) === "number")
  {result = x * y;}
  return result;
}

// Write a function that returns whether a given number is even
function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {

  if (typeof(a)  != "number" || typeof(b)!= "number" || typeof(c)!= "number") {
    return false
  } else if (a > b && a > c) {
    return a;
  } else if (b > 1 && b > c) {
    return b;
  } else {
    return c;
  }
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  if (Array.isArray(numbers) === false) {return false }
  if (numbers[0] === undefined){return 0};

  let sum = 0;

  for (let i=0; i<numbers.length; i++){
    if (typeof(numbers[i]) != "number") {
      return false}
  }

  sum = (numbers.reduce(function(a, b){
      return a+b }
))


return sum;
}


// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  if (Array.isArray(numbers)===false) {return false}
  if (numbers.length === 0) {
    return false;
  }
  let maxNumber = 0;
  numbers.map(function(num) {
    if (num > maxNumber) {
      maxNumber = num;
    }
  });
  return maxNumber;
}

// Return the longest string in an array
function longestString(strings) {
  if (Array.isArray(strings)===false || strings.length === 0){return false}
  let maxString = "";
  strings.map(function(string){if (!string){
  } else if (string.length > maxString.length){
      maxString = string;
    }
  }
  )
  return maxString;
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  if (Array.isArray(wordsArr)===false){return false}
  let indexWord = false
  if (wordsArr.indexOf(word) != -1){indexWord = true}
  return indexWord;
}

// Finding the first non-duplicate (non-repeating) word in an array

function findUnique(wordsArr) {

  if (Array.isArray(wordsArr)===false || wordsArr.length === 0){return false}
  let finalAnswer=  ""
  wordsArr.find(function(num){
    if (wordsArr.indexOf(num) === wordsArr.lastIndexOf(num)){
      finalAnswer = num;
      return finalAnswer;
    }
  })

  return finalAnswer
}
  

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  if (typeof(personObj) != "object"){return false}
  if ((!personObj.firstName) || (!personObj.lastName)) {return false}
  return (personObj.firstName+" "+personObj.lastName)

}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  if (Array.isArray(matrix)===false|| matrix.length === 0) {return false}
  let counter = 0;
  let array = [...matrix.flat()];
    array.map(function(miniNum){
      if (miniNum > counter) {counter = miniNum}
    }) 
  return counter
}

