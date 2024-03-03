let output = "";
const result = document.querySelector(".result");

function submit() {
    const number = parseInt(document.querySelector("#number").value);

    let dividers = [2, 3, 5, 7, 9, 10];

    dividers.forEach((elem) => {
        if (number % elem == 0) {
            output += "<p>is divisible by " + elem + "; </p>"
        } else {
            output += "<p>is not divisible by " + elem + "; </p>"
        }
    })

    result.innerHTML = output;
}
let enteredNumbers = [];

function checkRepeatedNumber() {
    const number = parseInt(document.querySelector("#number").value);

    if (enteredNumbers.includes(Number(number))) {
        output += "<p>Number " + number + " is repeated. It was entered earlier; </p>"
    } else {
        enteredNumbers.push(Number(number));
        output += "<p>Number " + number + " is entered; </p>"
    }

    result.innerHTML = output;
}

function countWords() {
    var text = document.getElementById('textInput').value;

    if (/\d/.test(text)) {
        alert("Please enter text, not a number.");
        return;
    }

    document.getElementById('wordCount').innerText = text.trim().split(/\s+/).length;
}