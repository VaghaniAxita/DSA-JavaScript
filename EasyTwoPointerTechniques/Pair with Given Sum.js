// Pair with Given Sum

const pairWithSum =(arr,target)=>{

    let i = 0;
    let j = arr.length - 1;
    
    while (i < j) {
      const sum = arr[i] + arr[j];
      if (sum === target) {
        return true;
      } else if (sum < target) {
        i++;
      } else {
        j--;
      }
    }
    
    return false; 
  };
  
  let Arr = [1, 2, 3, 4, 5];
  let target = 9;
  
  console.log(pairWithSum(Arr, target)); 
    
