function RideFunction() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function ageFunction() {
    var age, canVote;
    age = document.getElementById("age").value;
    canVote = (age >= 18) ? "Vote away":"Better luck next year"
    document.getElementById("vote").innerHTML = canVote;
}

function Vehicle(Make,Model,Year,Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a "+Erik.Vehicle_Color + "-colored "+Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function Pokemon(Move1, Move2, Move3, Move4) {
    this.Pokemon_Move1 = Move1;
    this.Pokemon_Move2 = Move2;
    this.Pokemon_Move3 = Move3;
    this.Pokemon_Move4 = Move4;
}
var Starmie = new Pokemon("Surf", "Psychic", "Hydro Pump", "Thunder");
var Magikarp = new Pokemon("Splash", "Splash", "Splash", "Tackle");
function grabTeam() {
    document.getElementById("New_and_This").innerHTML = "Starmie is the best. She knows water moves like "+Starmie.Pokemon_Move1+ " and "+Starmie.Pokemon_Move3 + ". She can use "+ Starmie.Pokemon_Move2+". and even electric attacks like "+ Starmie.Pokemon_Move4+"."
}

function count_Function() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}