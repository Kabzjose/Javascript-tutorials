//Displaying properties of objects
let user={
    name: Joseph,
    age: 19,
    isAdmin: true
}
for(let key in user){
    console.log(key)// name, age ,isAdmin
    console.log(user[key]) // joseph, 19,true
}

//"this" in objects
let hello={
    name:"josee",
    sayHi(){
        console.log(this.name)
    }
}
hello.sayHi()// josee

// code to generate total marks and average
let marks={
    math:77,
    english:58,
    pyhsics:80,
    chemistry:74,
    computer:80,
}
let totalMarks=0
let subjectCount =0
for(let mark in marks){
    totalMarks += marks[mark];
    subjectCount++
}
let average= totalMarks/subjectCount;
console.log(totalMarks)// 369
console.log(average)//73.8

// highest subject
let subjects= {
  math: 77,
  english: 58,
  physics: 80,
  chemistry: 74,
  computer: 89,
};
let highest={
    subject:"",
    score:0,
};
for (let subject in subjects) {
  if (subjects[subject] > highest.score) {
    highest.subject = subject;
    highest.score = subjects[subject];
  }
}

console.log(highest);//{ subject: 'computer', score: 89 }

// Grading subjects and displaying score and grade
let scores = {
  math: 77,
  english: 58,
  physics: 80,
  chemistry: 74,
  computer: 89,
};

let gradedScores = {};

for (let subject in scores) {
  let score = scores[subject];
  let grade = "";

  if (score >= 80 && score <= 100) {
    grade = "A";
  } else if (score >= 70 && score <= 79) {
    grade = "B";
  } else if (score >= 60 && score <= 69) {
    grade = "C";
  } else if (score >= 50 && score <= 59) {
    grade = "D";
  } else {
    grade = "F";
  }

  
  gradedScores[subject] = {
    score: score,
    grade: grade
  };
}

console.log(gradedScores);

// array destructuring
 const fruits=["apple","bananas","orange"]
 const [firstFruit,secondFruit]=fruits
 console.log(firstFruit)//apple
 console.log(secondFruit)//bananas
 //spread operator array
 const moreFruits={...fruits,"mangos","lemon"}
console.log(moreFruits)[ 'apple', 'bananas', 'orange', 'mangos', 'lemon' ]


 //object destructuring
 const person={
    name:"Jose",
    age:23,
    
};
// renaming while destructuring
const {city:"Nairobi"}=person
const { name,age} =person

console.log(name)//Jose
console.log(age)//23

//spread operator object
const details={...person,gender:"male",}
 console.log(details)//{ name: 'Jose', age: 23, city: 'Nairobi', gender: 'male' }

 // rest operator-collecting remaining items
 const numbers=[1,2,3,4,5]
 const [first,second,...others]=numbers
 console.log(first)//1
 console.log(second)//2
 console.log(others)//3,4,5
 //rest operator-Collect Function Arguments
 const sum=(...numbers)=>{
    let total=0
    numbers.forEach(number => total += number)
    return total;
}
console.log(sum(1,2,3,10,34,45))//95
