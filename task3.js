/*Task 3: 
1. Write a function called `reverseString` that takes a string as a parameter and returns the reversed version of that string.
2. Test the function with at least two different strings and print the results to the console.*/

function reverseString(str) {
    const strRev =  Array.from(str).reverse().join("");
    //Array.from() to change from string to array
    //reverse() to reverse the array
    //join() to join the array into one string
    console.log(strRev);
}
reverseString("JavaScript");
reverseString("fullstack");