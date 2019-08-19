function countToTen() {
    var Digit = "";
    var X = 1;
    while (X<11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("countingToTen").innerHTML = Digit;
}

function stringLength(string) {
    console.log(string.length)
}

stringLength("Oh, this string?")

var Instruments = ["guitar", "drum", "bass", "piano", "Violin", "Trumpet", "Flute"];
var content = "";
var Y;
function forLoop() {
    for (Y = 0; Y<Instruments.length; Y++) {
        content += Instruments[Y] + "<br>";
    }
    document.getElementById("listOfInstruments").innerHTML = content;
}

function catPics() {
    var catPicture=[];
    catPicture[0]="sleeping";
    catPicture[1]="playing";
    catPicture[2]="eating";
    catPicture[3]="purring";
    document.getElementById("Cat").innerHTML = "In this picture the cat is "+catPicture[2]+".";
}

function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price;
}

function letThis() {
    let name = "Connor";
    document.getElementById("letting").innerHTML = name
}

function myFunction(name) {
    return "Hello " + name;
  }
  console.log(myFunction("John"));

let Starmie = {
    type: "water",
    evolution: "Staryu",
    move: "Hydro Pump",
    attack: function() {
        return "Starmie used " + this.move;
    }
}
document.write(Starmie.attack());

var i = 0;
while (i<100) {
    console.log( "The number is " + i);
    i++;
    if (i===5) {break;}
}

let v = 0;
for (v=0; v<5; v++) {
    if (v===3) {continue;}
    console.log("The number is " + v);
}