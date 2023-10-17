//2.
const maxOfThree = function(...numbers) {
    return Math.max(...numbers)
  }
  console.log(maxOfThree(10, 20, 30));
  
  //3.
  function isCharAVowel(letter) {
    switch (letter.toLowerCase()) {
        case 'a':
            return true;
            break;
        case 'e':
            return true;
            break;
        case 'i':
            return true;
            break;
        case 'o':
            return true;
            break;
        case 'u':
            return true;
            break;
        default:
            return false;
    }
}
console.log(isCharAVowel('a'))
console.log(isCharAVowel('b'))

//4.
const sumArray = function(arr) {
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum;
}

console.log(sumArray([10, 20, 30, 40]))

//5.
function multiplyArray(arr) {
    let product = 1;
    arr.forEach(element => {
        product *= element;
    })
    return product;
}

console.log(multiplyArray([2,2,2,2,2]))

//6.
let numArgs = function(...arguments) {
    return arguments.length;
}

console.log(numArgs('Don Corneleous said','love', 'peace', 'and soul'))

//7.
function reverseString(str) {
    let strRev;
    for (let i = str.length; i >= 0; i--) {
        strRev += str[i];
    }
    return strRev;
}
console.log(reverseString('love'))