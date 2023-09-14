const arr = [1,2,3];
// arr.splice(0,1);  // 2 means offset , 0 length . added element
// first para = => offset
//second para ==> element to be removed
const ans = arr.splice(0);
console.log(ans);

const arr1 = [1,2,3,300,31,4];

const sorted = arr1.sort((a,b)=>{
 return a-b;
})
console.log(sorted);