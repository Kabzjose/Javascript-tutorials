function createCounter() {
  let count = 0; // private variable

  return {
    increment: function () {
      count++;
      return count;
    },
    decrement: function () {
      if (count > 0) count--;
      return count;
    },
    getValue: function () {
      return count;
    }
  };
}

let cartCounter = createCounter();

console.log(cartCounter.increment()); // 1
console.log(cartCounter.increment()); // 2
console.log(cartCounter.decrement()); // 1
console.log(cartCounter.getValue());  // 1
//only increment, decrement,and getCalue can access the count.Its like having a private valuable in js