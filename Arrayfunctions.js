// code to  display words longer than 4 letters
let words = ["code", "elephant", "hi", "developer", "js"];
let results= words.filter(word=> word.length>4)
console.log(results)



// code to add only even numbers
let numbers= [2,3,4,5,6,7,8,9,10]
 let evenNum = numbers.filter(even=> even % 2 ===0)
 let sum=evenNum.reduce((acc,num)=> acc+num,0)
 console.log(sum)


 //code to display the longest word
 let word = ["code", "elephant", "hi", "developer"];
let longest = "";

for (let n of word) {
  if (word.length > longest.length) {
    longest = n;
  }
}

console.log(longest); 


// code to square all numbers
let number =[ 2,3,4,5,6,7]
let square= number.map(num=> num*num)
console.log(square)