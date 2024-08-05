// Question 2: Merge Two Sorted Arrays
const mergeArray=(num1,m,num2,n)=>{
    let i=m-1;
    let j=n-1;
    let k=m+n-1;

    while (i>=0 &&j>=0){
        if(num1[i]>num2[j]){
            num1[k]=num1[i];
            i--;
        }
        else{
            num1[k]=num2[j];
            j--;
        }
        k--;
    }

    while (j>=0){
        num1[k]=num2[j];
        j--;
        k--;
    }
}

let num1=[1,3,5]
let num2=[2,4,6]
console.log(mergeArray);

