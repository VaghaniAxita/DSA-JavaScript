// Question 3: Find the Smallest Element

const small = (arr) => {
    let ele = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < ele) {
            ele = arr[i];
        }
    }

    return ele;
}

console.log(small([3, 7, 1, 9, 2]));

console.log(small([10, 20, 5]));  