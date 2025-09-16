
let count =0
let timer=setInterval(()=>{
    console.log("Count: " +count)
    count ++
   if(count>6){
    clearInterval(timer)
    console.log("stopped")
   }
},2000)
