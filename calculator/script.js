let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        // equal operation
        if (e.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;
        }

        // make the numbers stack when clicked
        string += e.target.innerHTML; // add the clicked button's value to the string
        input.value = string; // display the updated string in the input box
    })
})
