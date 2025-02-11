// let a = [5,2,6,4,8];
// let b = [];
// for (let i = 0; i<a.length; i++){
//     b.push(a[i]);
// }
// let c = b.concat(a);
// console.log(c);


// another way ----------------

let arr =  [5,7,2,6,8,9,4];
let m= arr.length

for(let j = 0; j<m; j++){
    arr[m + j] = arr[j];
}
for(let j = 0; j<arr.length; j++){
    console.log(arr[j]);
    
}
