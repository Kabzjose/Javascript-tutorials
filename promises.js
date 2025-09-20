

// Creating a promise
let myPromise= new Promise((resolve, reject) => {
    let succes=false;
    if(succes){
        resolve("It worked")//this is the "result"
    }else{
        reject("it failed")//this is the "error"
    }
})
//using .then and .catch
myPromise
.then(result=>console.log(result))
.catch(error=>console.log(error));

//promise with a delay
let delayedpromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
 resolve("this message displayed after 3 seconds")
    },3000)
   
})
delayedpromise.then(result=>console.log(result));
