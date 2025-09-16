let students = [
  { name: "Alice", age: 20, marks: 85 },
  { name: "Brian", age: 22, marks: 72 },
  { name: "John", age: 23, marks: 40 },
  { name: "Mary", age: 21, marks: 50 },
  { name: "Cathy", age: 19, marks: 91 }
];
let scores=students.map(student =>student.marks)
console.log(scores)// groups all marks in one array
let marks=students.filter(student=>student.marks>60)
console.log(marks)//marks greater than 60
let average=scores.reduce((a,b)=> a+b,0)
console.log(average)// FInd tha total average
