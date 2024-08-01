// Remove Duplicates from Sorted Array

const removeDuplicatesArray = (arr) => {
   

    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[j] !== arr[i]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
};


const arr = [1, 1, 2];

const newarr = removeDuplicatesArray(arr);

console.log(newarr); 
console.log(arr.slice(0, newarr)); 
