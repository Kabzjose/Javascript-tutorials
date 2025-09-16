
let count =0
let timer=setInterval(()=>{
    console.log("Count: " +count)
    count ++
   if(count>6){
    clearInterval(timer)
    console.log("stopped")
   }
},2000)

setInterval(()=>{
    let now= new Date()
    console.log(now.toLocaleTimeString())//Digital clock
},1000)

let num =10
let time=setInterval(()=>{
    console.log("Count: " +num)//counts from 10-0
    num --
   if(num<1){
    clearInterval(time)
    console.log("stopped")
   }
},2000)