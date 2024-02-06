/*Task 4:
1. Create an HTML file with a button element and a paragraph element.
2. Link a JavaScript file to the HTML document.
3. Write a JavaScript script that adds an event listener to the button.
4. When the button is clicked, change the content of the paragraph to display a custom message.*/

const text = document.querySelector("p");

document.getElementById("try").addEventListener("click", tryFunction);

function tryFunction() {
    //change <p>Look! The parapgraph content changed.</p>
    text.innerText = "Look! The parapgraph content changed.";
}