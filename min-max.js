let a = [1,5,8,0,9,2,3,4,5];

let max = a[0];
let min = a[0];

for(let i=1; i<a.length; i++){
  if (a[i] > max){
    max = a[i];
  }   
  if (a[i]<min){
    min = a[i]
  }
}
console.log(max);
console.log(min);