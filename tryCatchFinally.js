function reverseString(s) {
    // Check if s is a string
    if (typeof s !== "string") {
        console.log("s.split is not a function");
        console.log(s);
      return s; // Return the original value
    }
  
    try {
      const sSplit = s.split("");
      const sReversed = sSplit.reverse();
      const sNewArr = sReversed.join("");
      console.log(sNewArr); // Print the reversed string
      return sNewArr;
    } catch (e) {
      console.log(e.message); // Print the exception's message
      console.log(s); // Print the original string
      return s; // Return the original value
    }
  }
  
  // Test cases
  reverseString("1234"); // Output: 4321
  reverseString(Number(1234)); // Output: s.split is not a function
  reverseString("Hello World"); // Output: dlroW olleH
  

  