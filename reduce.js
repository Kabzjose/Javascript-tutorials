const student={
    name:"JOY",
    age:20,
    marks:[20,45,56],
    getAverage: function(){
        let average=this.marks.reduce((acc,num)=>acc+num,0)
        return average/this.marks.length
    }
   
}
 console.log(student.getAverage())