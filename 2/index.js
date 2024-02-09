const input = document.getElementById("input")

function reverseString(str) {
    return str.split("").reverse().join("")
}

function check() {
    const value = input.value;
    const reverse = reverseString(value);

    // check if the input is empty
    if (value !== "") {
        if (value === reverse) {
            alert("P A L I N D R O M E");
        } else {
            alert("Nope!");
        }
    } else {
        alert("Input is empty!");
    }

    input.value = "";
}