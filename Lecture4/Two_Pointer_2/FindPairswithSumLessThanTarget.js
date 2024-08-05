const sumLessThanTarget=(num,target)=>{
    num.sort((a, b) => a - b)
    let left = 0;
    let right = num.length - 1;
    let sum = []; 
    while (left < right) {
        if (num[left] + num[right] < target) {
            for (let i = right; i > left; i--) {
                sum.push([num[left], num[i]]);
            }
            left++; 
        } else {
            right--; 
        }
    }

    return sum;
}

let numbers = [1, 2, 3, 4, 5];
let target = 6;
console.log(sumLessThanTarget(numbers, target));
let numbers2 = [1, 3, 5, 7];
let target2 = 10
console.log(sumLessThanTarget(numbers2, target2));