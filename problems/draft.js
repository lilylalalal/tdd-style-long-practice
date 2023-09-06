function reciprocal(n)  {
    if (n < 1| n> 1000000) {
      throw new TypeError("only accepts number between 1 and1000000 ");
    } else {
      return 1 / n;
    }
  }
  
  try {
    console.log(reciprocal(0.35)); 
    // prints 6
  } catch (error) {
    console.error(error.name + ": " + error.message);
  }
  
  console.log("hello"); // prints hello
  try {
    console.log(reciprocal(1000005)); 
    // prints 6
  } catch (error) {
    console.error(error.name + ": " + error.message);
  }
  console.log(reciprocal(9))
    //console.log("only accepts number between 1 and1000000 ")
  

