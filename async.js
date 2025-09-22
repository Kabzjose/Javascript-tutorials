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
async function getjoke() {
    try{
        console.log("Fetching a joke... ");
        let response=await fetch("https://official-joke-api.appspot.com/random_joke")
        let data=await response.json()
         console.log("Data received:", data);  // check what you actually got
        console.log("Setup:",data.setup  || "No setup")
        console.log("Punchline:",data.punchline || "No punchline")
    }catch (error){
   console.log("Error finding data:",error)//Error finding data: fetch failed

    }
    
}
getjoke()