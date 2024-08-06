let arr=[1,2,-3,4]

for(let i=0;i<arr.length;i++){
    let subArray=[]
    for(let j=i;j<arr.length;j++){
        subArray.push(arr[j])
        console.log(subArray);
        
    }
}