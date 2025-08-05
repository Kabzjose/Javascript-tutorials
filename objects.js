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

// Grading subjects
let scores = {
  math: 77,
  english: 58,
  physics: 80,
  chemistry: 74,
  computer: 89,
};


for (let subject in scores) {
  if (scores[subject]<=100 && scores[subject]>=80  ) {
    scores[subject]="A"
  } else if(scores[subject]<=79 && scores[subject]>=70){
      scores[subject]="B"
  }else if(scores[subject]<=69 && scores[subject]>=60){
      scores[subject]="C"
  }else if(scores[subject]>=50 && scores[subject]<=59){
      scores[subject]="D"
  }else{
      scores[subject]="F"
  }
}

console.log(scores);
