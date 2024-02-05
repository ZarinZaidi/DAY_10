/*Task 3: 
1. Write a function called `reverseString` that takes a string as a parameter and returns the reversed version of that string.
2. Test the function with at least two different strings and print the results to the console.*/

function reverseString(str) {
    const strRev =  Array.from(str).reverse().join("");
    console.log(strRev);
}
reverseString("JavaScript");
reverseString("fullstack");