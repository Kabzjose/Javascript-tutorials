function createCart (){
    let items=[]
    return{
        addItem: function(item){
       items.push(item)
       console.log(`${item} added to cart`)
        },
        removeItem: function(item){
           items= items.filter(i => i !== item)
           console.log(`${item} has been removed`)
        },
        getItems:function(){
        return [...items]//return copy so the original  one can remain private
        },
        getCount:function(){
             return items.length
        }
    }
}
// Create a cart instance
let cart = createCart();

cart.addItem("Shoes");     // Shoes added to cart
cart.addItem("T-shirt");   // T-shirt added to cart
console.log(cart.getItems()); // ["Shoes", "T-shirt"]
console.log(cart.getCount()); // 2

cart.removeItem("Shoes"); 
console.log(cart.getItems()); // ["T-shirt"]