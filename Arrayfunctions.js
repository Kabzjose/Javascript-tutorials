// code to longer words
let words = ["code", "elephant", "hi", "developer", "js"];
let results= words.filter(word=> word.length>4)
console.log(results)



// code to add only even numbers
let numbers= [2,3,4,5,6,7,8,9,10]
 let evenNum = numbers.filter(even=> even % 2 ===0)
 let sum=evenNum.reduce((acc,num)=> acc+num,0)
 console.log(sum)