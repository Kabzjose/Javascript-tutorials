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

//  code to change color of a p element when the mouse enters an elemenet
let event=document.getElementById("time")
event.addEventListener("mouseover",()=>{
  event.style.color="red"
})
// code to reset the original color once the mouse moves out of an element
event.addEventListener("mouseout", () => {
  event.style.color = "";  // reset
});

//code to detect if a user has pressed enterkey
let input=document.getElementById("input")
input.addEventListener("keydown",(e)=>{
  if(e.key === "Enter"){
    console.log("Yous pressed Enter key")
  }
})
//Array.sort() method
const fruits=["banana","apple", "orange"]
fruits.sort()
  console.log(fruits)//// Output: ["apple", "banana", "orange"]

  //sorting numbers ascending order
  const num=[10,2,5]
  num.sort((a,b)=>a-b)//If the result is negative, a comes before b,If the result is positive, a comes after b,If it’s 0, their order stays the same
  console.log(num)// Output: [2, 5, 10] 
//descending order
numbers.sort((a, b) => b - a);
console.log(numbers);// Output: [10, 5, 2]

//sorting students by score
const students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 92 },
  { name: "Charlie", score: 78 }
];

students.sort((a, b) => b.score - a.score);
console.log(students);

