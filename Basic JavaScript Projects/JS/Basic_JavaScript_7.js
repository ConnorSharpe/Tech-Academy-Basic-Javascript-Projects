var q = 40
function multiply() {
    document.write(q*3);
}

function divide() {
    var queue = 40
    document.write(q/queue)
}

multiply();
divide();

function time() {
    if (new Date().getHours() > 18) {
        document.getElementById("Greeting").innerHTML = "Go to sleep.";
    }
    else {
        document.getElementById("Greeting").innerHTML = "Have a good day";
    }
}

function Party() {
    var oldness = 22
    if ( oldness < 21) {
        document.getElementById("IF").innerHTML = "you are way too young";
    }
    else {
        document.getElementById("IF").innerHTML = "LET'S PARTY!";
    }
}

function fingerCount() {
    if (document.getElementById("finger").value ==5) {
        document.getElementById("response").innerHTML = "That sounds about right."
    }
    else {
        document.getElementById("response").innerHTML = "Whoa, go to the doctor."
    }
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning.";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is the afternoon";
    }
    else {
        Reply = "It is evening";
    }
    document.getElementById("Time_of_Day").innerHTML = Reply;
}