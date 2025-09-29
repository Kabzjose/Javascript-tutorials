//Added try and catch to display any error messages
try{
    const student ={
    name:"jose",
    age: 20,
    email:"Josekabz@gmail.com"
}
for(let key in student){
    console.log(key, student[key])
}
}catch(error){
    console.log("something went wrong:",error.message)
}