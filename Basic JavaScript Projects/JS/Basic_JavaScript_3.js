window.alert(Math.ceil(Math.random()))
window.alert(Math.round(Math.random()*100));

function myMath() {
    var number = 3 + 3;
    document.getElementById("Math").innerHTML = number;
}

function subtraction() {
    var simple = 40 - 20;
    document.getElementById("minus").innerHTML = simple;
}

function divide() {
    var fraction = 400 / 2;
    document.getElementById("division").innerHTML = fraction;
}

function times() {
    var number2 = 10 * 10;
    document.getElementById("multiply").innerHTML = number2;
}

function moreMath() {
    var simple_Math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("Math2").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}

function modulusOperator() {
    var simple_Math2 = 25 % 6;
    document.getElementById("Math3").innerHTML = "When you divide 25 by 6 you have a remainder of " + simple_Math2;
}

function negationOperator() {
    var x=10;
    document.getElementById("Math4").innerHTML = -x;
}

function incrementOperator() {
    var q = 5;
    q++;
    document.getElementById("Math5").innerHTML = q;
}

function decrementOperator() {
    var y = 5.25;
    y--;
    document.getElementById("Math6").innerHTML = y;
}

