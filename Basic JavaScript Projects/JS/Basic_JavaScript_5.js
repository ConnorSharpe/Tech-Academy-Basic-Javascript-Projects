document.write(typeof 5);

document.write(2E310);
document.write(-3E310);

document.write(2>1);
document.write(2<1);

document.write(3===3);
document.write(3==="four");
document.write(3==="3");
document.write(3===2);

console.log(2+2)
console.log(2<1);
console.log(3==3);
console.log(3==4);

console.log(3>2&&2<3);
console.log(3>2&&2>3);
console.log(3>2||2>3);
console.log(3<2||1>10);

function my_Function() {
    document.getElementById("test").innerHTML = 0/0;
}

function my_Function2() {
    document.getElementById("test2").innerHTML = isNaN("Stringaling");
}

function my_Function3() {
    document.getElementById("test3").innerHTML = isNaN("4");
}

function notFunction() {
    document.getElementById("Not").innerHTML = !(5>10);
}

function notFunction2() {
    document.getElementById("Not2").innerHTML = !(20>10);
}
document.write("300" + 50);