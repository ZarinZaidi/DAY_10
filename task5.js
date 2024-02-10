/*Task 5: 
1. Declare an array of your favourite fruits.
2. Use a `for` loop to iterate through the array and print each fruit to the console.*/

let arrFruit = ["mango", "papaya", "watermelon", "pineapple"];

//declare a function with arr parameters to loop through the arr
function loopFruit (arr) {
    //loop through the arr and display content of the arr based on looped index
    for (let i=0; i<arr.length; i++){
        console.log(arr[i]);    
    }
}

console.log(loopFruit(arrFruit));