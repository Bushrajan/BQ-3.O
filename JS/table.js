
function run() {
    
    document.getElementById("output").innerHTML= "";
    let initial = Number(document.getElementById("initial").value);
    let range = Number(document.getElementById("range").value);

    for (let a = 1; a <= range; a++) {
        document.getElementById("output").innerHTML += "<p>" + initial + " x " + a + " = " + initial * a + "<p>", "<br>";
    }
}

function clearOutput() {
    document.getElementById("output").innerHTML = "";
    location.reload();
}



