/*Task 2:
1. Create a function called `checkNumber` that takes a parameter `num`.
2. Inside the function, use an `if...else` statement to determine if the number is positive, negative, or zero.
Print the result to the console.*/

function checkNumber(){
    const num = document.getElementById("number").value;
    let result;
    if(num==0){
        result="Zero";
    }else if(num>0){
        result="Positive number";
    }else{
        result="Negative number";
    }
    console.log(result);
}