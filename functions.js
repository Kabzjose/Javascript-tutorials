// code to greet user
let greet=(name)=>{
    return `Hello, ${name}`
}
console.log(greet("jose"))

 // code to displaay even numbers
 let isEven=()=>{
     let num= [1,2,3,4,5].filter(n=>n % 2==0)
     console.log(num)
}
isEven();

//code to return largest number
let num = (a, b, c) => {
    let big;
    if (a >= b && a >= c) {
        big = a;
    } else if (b >= a && b >= c) {
        big = b;
    } else {
        big = c;
    }
    return big;
}

console.log(num(45, 50, 99)); // Output: 99
 // code to reverse a word
 let word="Hello"
 let reverse= word.split("").reverse().join("");
 console.log( reverse)