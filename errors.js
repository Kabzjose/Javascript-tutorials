//try and catch
try{
    let num =10/0 ;// allowed in js, but lets force an error
    console.log("Result",num)
    //force an error
    if(num===infinity){
     throw new Error("Division by zero is not allowed")
    }
}catch(error){
    console.log("Something went wrong:",error.message)
}