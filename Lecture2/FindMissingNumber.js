// // Question 10: Find Missing Number

const missing = (arr) => {

    let n = arr.length + 1;
    let total = (n * (n + 1)) / 2;

    let arraySum = arr.reduce((sum, num) => sum + num, 0);

    let missingNumber = total - arraySum;

    return missingNumber;
}

console.log(missing([1, 2, 4, 5, 6])); 
