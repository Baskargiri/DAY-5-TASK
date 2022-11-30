
//1.a print odd numbers in array using 
// anonymous function:

// ar arr=[1,8,10,15,78,88,53,2,5];
// var a = function(arr){
//   let result=[]
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%2!=0){
//              result.push(arr[i]) ;
//         }
// }
// return result;
// }
// console.log(a(arr));

// //output=[1, 15, 53, 5]

//IIFE function:

// (function a(arr){
//   let result=[]
//       for(let i=0;i<arr.length;i++){
//           if(arr[i]%2!=0){
//                result.push(arr[i]) ;
//           }
// }console.log(result)
// }
// )([2,1,4,8,6,9,8,7])

//output: [1, 9, 7]


// //1.b Convert all the strings to title caps in a string array using 

//anonymous function

// let arr1=["apple","mango","orange","graps","banana"];
// let b= function(arr1){
//   let result1=[];
//   for(var j=0;j<arr1.length;j++){
//     result1.push(arr1[j].toUpperCase());
//   }
//   return result1;
// }
// console.log(b(arr1))

// // output: ['APPLE', 'MANGO', 'ORANGE', 'GRAPS', 'BANANA']

//IIFE Function
// (function a(arr1){
//       let result1=[];
//       for(var j=0;j<arr1.length;j++){
//         result1.push(arr1[j].toUpperCase());
//       }
//       console.log(result1);
//     }
// )(["apple","mango","orange","graps","banana"])

// output:['APPLE', 'MANGO', 'ORANGE', 'GRAPS', 'BANANA']

// //1.c Sum of all numbers in an array using 

//anonymous function

// let arr2=[1,44,55,88,99,36];
// let sum=0;
// let c=function(arr2){
//     for(k=0;k<arr2.length;k++){
//         sum+=arr2[k];
//     }
//     return sum;
// }
// console.log(c(arr2))

// output: 323

//IIFE FUNCTION:
// (function b(arr2){
//   var sum=0;
//   for(k=0;k<arr2.length;k++){
//           sum =sum + arr2[k];
//         }
//        console.log(sum);
// })([1,44,55,88,99,36])

//output: 323


// 1.d Return all the prime numbers in an array using 

// anonymous function

// let no=[2,5,9,8,12,55,66,48];
// let d=function(no){
//   let result3=[];
//   for(n=0;n<no.length;n++){
//     if(no[n]==2){
//       result3.push(no[n])
//     }
//     if(no[n]>2){
//      if(no[n]%2!=0){
//       result3.push(no[n]);
//      }
//     }
//   }
//   return result3;
// }
// console.log(d(no))
//output [2, 5, 9, 55]

//IIFE

// (function a(no){
//   let result3=[];
//   for(n=0;n<no.length;n++){
//     if(no[n]==2){
//       result3.push(no[n])
//     }
//     if(no[n]>2){
//      if(no[n]%2!=0){
//       result3.push(no[n]);
    
//      }
//     }
//   }
//  console.log(result3);
// })([2,5,9,8,12,55,66,48])

//output: [2, 5, 9, 55]


// 1.e Return all the palindromes in an array using 

//anonymous function


// let a =["121","guvi","did","eye"];
// let d=[];
// let stri=function(a){
//     for(var i=0;i<a.length;i++){
//         var reversed =a[i].split("").reverse().join("");
//         if(reversed===a[i]){
//             d.push(a[i]);
//         }
//     }return d;
// }
// console.log(stri(a));

//output:[ '121', 'did', 'eye' ]

//IIFE FUNCTION:



// (function c (a){
//   let d=[];
//     for(var i=0;i<a.length;i++){
//         var reversed =a[i].split("").reverse().join("");
//         if(reversed===a[i]){
//             d.push(a[i]);
//         }
//     }console.log(d);
// }
// )(["121","guvi","did","eye"]);

// output: ['121', 'did', 'eye']



// 1.g Remove duplicates from an array using 

//anonymous function

// var a=[1,2,3,4,2,2,1,5,8];
// let c=function(a){
//   let b=[];
//   for(let i=0;i<a.length;i++){
//     if(b.indexOf(a[i]) === -1){
//        b.push(a[i]);
//     }
//   }return b;
// }
// console.log(c(a))

//output: [1, 2, 3, 4, 5, 8]

//IIFE function:

// var a=[1,2,3,4,2,2,1,5,8];
// (function c(a){
//   let b=[];
//   for(let i=0;i<a.length;i++){
//     if(b.indexOf(a[i]) === -1){
//        b.push(a[i]);
//     }
//   }console.log(b);
// }
// )([1,2,3,4,2,2,1,5,8]);

//output: [1, 2, 3, 4, 5, 8]


// 1.h Rotate an array by k times using 

//anonymous function

// var arr = [1,2,3,4,5,6,7];
// var k =4;
// var b = function(arr,k){
//   let n = arr.splice(arr.length-k);
//   for(let i=0;i<n.length;i++){
//     arr.splice(i,0,n[i])
//   }return arr;
// }
// console.log(b(arr,k))

//ouptput:[4, 5, 6, 7, 1, 2, 3]

//IIFE FUNCTION:

// (function d (arr,k){
//   let n = arr.splice(arr.length-k);
//   for(let i=0;i<n.length;i++){
//     arr.splice(i,0,n[i])
//   }console.log(arr);
// })([1,5,9,8,3,7],4)

//output:[9, 8, 3, 7, 1, 5]


// 3.a Print odd numbers in an array using arrow function
 
// var a =(arr)=>{
//   var result=[];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%2!=0){
//              result.push(arr[i]) ;
//         }
// }return result;
// }
// console.log(a([2,45,88,75,69,54]));

// output: [45, 75, 69]


//3.b Convert all the strings to title caps in a string array using arrow function

// let b= arr1=>{
//   let result1=[];
//   for(var j=0;j<arr1.length;j++){
//     result1.push(arr1[j].toUpperCase());
//   }return result1
// }
// console.log(b(["apple","mango","orange","graps","banana"]));

//output:['APPLE', 'MANGO', 'ORANGE', 'GRAPS', 'BANANA']
 
//3.c  Sum of all numbers in an array using arrow function

// let b=()=>{
//   var sum=(a+b)
//   return a+b;
// }
// console.log(b([1,5,6,8]))




//3.d print odd numbers in array using 
// ARROW FUNCTION:

// var arr=[1,8,10,15,78,88,53,2,5];
// var a = (arr)=>{
//   let result=[]
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%2!=0){
//              result.push(arr[i]) ;
//         }
// }
// return result;
// }
// console.log(a(arr);

//output=[1, 15, 53, 5]

// //3.e Convert all the strings to title caps in a string array using 
// ARROW FUNCTION:

// let arr1=["apple","mango","orange","graps","banana"];
// let b= (arr1)=>{
//   let result1=[];
//   for(var j=0;j<arr1.length;j++){
//     result1.push(arr1[j].toUpperCase());
//   }
//   return result1;
// }
// console.log(b(arr1))

// // output: ['APPLE', 'MANGO', 'ORANGE', 'GRAPS', 'BANANA']


//3.c Sum of all numbers in an array using 
//ARROW FUNCTION:


// let arr2=[1,44,55,88,99,36];
// let sum=0;
// let c=(arr2)=>{
//     for(k=0;k<arr2.length;k++){
//         sum+=arr2[k];
//     }
//     return sum;
// }
// console.log(c(arr2))

// // output: 323

// 3.d Return all the prime numbers in an array using 

// let no=[2,5,9,8,12,55,66,48];
// let d=(no)=>{
//   let result3=[];
//   for(n=0;n<no.length;n++){
//     if(no[n]==2){
//       result3.push(no[n])
//     }
//     if(no[n]>2){
//      if(no[n]%2!=0){
//       result3.push(no[n]);
//      }
//     }
//   }
//   return result3;
// }
// console.log(d(no))

//output [2, 5, 9, 55]

// 3.e Return all the palindromes in an array using 
//arrow function


// let a =["121","guvi","did","eye"];
// let stri=(a)=>{
//   let d =[];
//     for(var i=0;i<a.length;i++){
//         var reversed =a[i].split("").reverse().join("");
//         if(reversed===a[i]){
//             d.push(a[i]);
//         }
//     }return d;
// }
// console.log(stri(a));

//output:[ '121', 'did', 'eye' ]
