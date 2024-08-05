const countPair= (arr, target) => {
    arr.sort((a, b) => a - b)
    let left = 0;
    let right = arr.length - 1;
    let count=0;

    while (left < right) {
        if (arr[left] + arr[right] < target) {
           count+=right-left;
            left++; 
        } else {
            right--; 
        }
    }

    return count;
}

let numbers = [1, 2, 3, 4, 5];
let target = 6;
console.log(countPair(numbers, target));
let numbers2 = [5, 2, 3, 4, 1];;
let target2 = 6;
console.log(countPair(numbers2, target2));