// Question 2: Find the Largest Element

const large =(arr)=>{
    let ele = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > ele) {
            ele = arr[i];
        }
    }

    return ele;
}

console.log(large([3, 7, 1, 9, 2]));  

console.log(large([10, 20, 5]));  

