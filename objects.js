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

  // Store both score and grade
  gradedScores[subject] = {
    score: score,
    grade: grade
  };
}

console.log(gradedScores);
