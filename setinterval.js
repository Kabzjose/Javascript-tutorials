
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