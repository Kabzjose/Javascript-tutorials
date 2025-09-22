/*let boilRice=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Rice is ready")
    },3000)
})
async function cook() {
    console.log("start cooking")
    let rice=await boilRice//waits here
    console.log(rice)//runs after rice is ready

    console.log("Food is ready")
    
}
console.log("washing dishes")// runs first because its outside the asyn function
cook()
*/
async function name() {
    try{
        let res=await fetch("https://wrong-url.com/data")
        let data=await res.json
        console.log(data)
    }catch (error){
   console.log("Error finding data:",error.message)
    }
    
}
name()