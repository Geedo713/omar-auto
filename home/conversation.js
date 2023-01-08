// These are the global variables of the script

const headerText = document.getElementById("name");
const colorBtn = document.getElementById("button");
const back = document.getElementById("container");
const output = document.getElementById("output");
const greeting = document.getElementById("greeting");
const form = document.getElementById("form");

// his function only gives the bot intro, once you run your mouse across the form

function botIntro() {
    greeting.innerHTML = "Hello, I am Omari Bot, please enter a number..."
}
form.addEventListener('mouseover', botIntro);

// This function should take the number argument and give us a number back that is between 0 and your number choice

function omariBot() {
    const input = document.getElementById("input").value;
    number = input;

    if (number > 0) {
        return output.innerHTML = Math.floor(Math.random() * number);
    } else {
        return output.innerHTML = "You must only enter a number greater than 0 fam!"
    }
}
colorBtn.addEventListener('click', omariBot);
