const student={
    name:"JOY",
    age:20,
    marks:[20,45,56],
    getAverage: function(){
        let average=this.marks.reduce((acc,num)=>acc+num,0)
        return average/this.marks.length
    }
   
}
 console.log(student.getAverage())//40.3333


  // this in objects
  const person={
    name:"Peter",
    age:23,
    greet: function(){
        console.log("Hey my Name is"+ this.name+ "and im "+this.age+"years old")
    }
  }
  person.greet()//Hey my Name is Peter and im 23  years old