fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json()) // convert response to JSON
  .then(data => console.log(data))   // use the data
  .catch(error => console.log("Error:", error)); // handle errors

  fetch("https://official-joke-api.appspot.com/random_joke")
   .then(response => response.json()) 
  .then(data=>{setTimeout(()=>{
    console.log("Setup:", data.setup )
    console.log("Punchline:", data.punchline)
  },2000)
    
  })
  .catch(error=> console.log("Something went wrong:",error))// Setup: Why don’t programmers like nature? Punchline: It has too many bugs.


