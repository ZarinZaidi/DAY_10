/*Task 1: 
1. Write a JavaScript script that declares two variables, `num1` and `num2`, and assigns them numeric values.
2. Perform basic arithmetic operations (addition, subtraction, multiplication, and division) on these variables.
3. Print the results to the console with meaningful messages.*/

var num1=10, num2=15;

console.log(num1 + " plus " + num2 + " equals to " + (num1+num2))
console.log(num1 + " minus " + num2 + "equals to "+ (num1-num2))
console.log(num1 + " multiply by " + num2 + "equals to "+ (num1*num2))
console.log(num1 + " divide by " + num2 + "equals to "+ (num1/num2))

/*ALTERNATIVE SOLUTION USING FUNCTION FOR EACH ARITHMETIC OPERATIONS
function add (num1,num2) {
    let result = num1 + num2;
    let message = num1 + " plus " + num2 + " equals to " + result;
    return message;
}
function minus (num1,num2) {
    let result = num1 - num2;
    let message = num1 + " minus " + num2 + " equals to " + result;
    return message;
}
function multiply (num1,num2) {
    let result = num1 * num2;
    let message = num1 + " multiply by " + num2 + " equals to " + result;
    return message;
}
function divide (num1,num2) {
    let result = num1 / num2;
    let message = num1 + " divide by " + num2 + " equals to " + result;
    return message;
}

console.log(add(15,10));
console.log(minus(15,10));
console.log(multiply(15,10));
console.log(divide(15,10));
*/
