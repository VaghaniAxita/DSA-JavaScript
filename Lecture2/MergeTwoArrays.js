// Question 7: Merge Two Arrays

const merge = (arr1, arr2) => {

    let mergeArray = [];

    for (let i = 0; i < arr1.length; i++) {
        mergeArray.push(arr1[i]);
    }
    for (let i = 0; i < arr2.length; i++) {
        mergeArray.push(arr2[i]);
    }
    return mergeArray;
}

console.log(merge([1, 2, 3], [4, 5, 6]));

console.log(merge([10,20], [30,40]));  