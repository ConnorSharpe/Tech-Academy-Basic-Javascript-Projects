function ConCat() {
    let secret1 = "You will "; 
    let secret2 = "never learn ";
    let secret3 = "the secret.";
    let whole = secret1.concat(secret2, secret3);
    document.getElementById("identification").innerHTML = whole;
}

function sliceMethod() {
    var Sentence = "the secret to scrambled eggs is a dash of water.";
    var section = Sentence.slice(-16,-1);
    var Section = section.toUpperCase();
    var search = Sentence.search("a dash of water")
    document.getElementById("slice").innerHTML = Section + search;
}

function StringNum () {
    var x = 100;
    document.getElementById("strang").innerHTML = x.toString();
}

function precisionMethod() {
    var x = 1.2342498456114;
    document.getElementById("precision").innerHTML = x.toPrecision(3);
}

function fixin() {
    var x = 1.6534;
    document.getElementById("fix").innerHTML = x.toFixed(2);
}

function value() {
    var str = "Hello World!";
    var res = str.valueOf();
    document.getElementById("val").innerHTML = res;
  }