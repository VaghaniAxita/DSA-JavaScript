// Q-1 Maximum Subarray Sum (Kadane's Algorithm)

let arr=[-2, 1, -3, 4, -1, 2, 1, -5, 4]

let currSum=arr[0]
let maxSum=arr[0]

for(let i=1;i<arr.length;i++){
    currSum+=arr[i]

    // if(currSum>maxSum){
    //     maxSum=currSum
    // }
    // if (currSum<0) {
    //     currSum=0
    // }

    maxSum=Math.max(maxSum,currSum)
    currSum=Math.max(0,currSum)
}

console.log(maxSum);
