// Question 9: Check if Array is Sorted

const sorted=(arr)=> {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        return false;
      }
    }
    return true;
  }
  
  console.log(sorted([1, 2, 3, 4, 5])); 
  console.log(sorted([5, 3, 4, 1, 2])); 