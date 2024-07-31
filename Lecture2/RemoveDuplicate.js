// Question 6: Remove Duplicates

const duplicate=(arr)=> {
    let ele = [];
    for (let i = 0; i < arr.length; i++) {
      if (!ele.includes(arr[i])) {
        ele.push(arr[i]);
      }
    }
    return uniqueArray;
  }
  

  console.log(duplicate([1, 2, 2, 3, 4, 4, 5])); 