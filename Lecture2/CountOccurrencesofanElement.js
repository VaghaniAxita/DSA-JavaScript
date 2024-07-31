// Question 5: Count Occurrences of an Element

const occurrences=(arr, target)=> {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        count++;
      }
    }
    return count;
  }

  console.log(occurrences([1, 2, 2, 3, 2, 4, 5], 2)); 

  console.log(occurrences([10, 20, 20, 10, 10], 10));