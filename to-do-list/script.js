const inputBox = document.getElementById("input-box");;
const listContainer = document.getElementById("list-container");
const addButton = document.querySelector("button");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");    
    } else {
        // Create a new list item
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        // Create a "close" button and append it to each list item
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Unicode for multiplication sign (×)
        li.appendChild(span);
    }
    // Clear the input box
    inputBox.value = "";
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}, false);