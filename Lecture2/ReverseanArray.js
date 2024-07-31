// Question 4: Reverse an Array

function rev(arr) {
    let start = 0;
    let end = arr.length - 1;
  
    while (start < end) {
      let ele = arr[start];
      arr[start] = arr[end];
      arr[end] = ele;
      start++;
      end--;
    }
    return arr;
  }
  console.log(rev([1, 2, 3, 4, 5])); 

  console.log(rev([10, 20, 30]));   