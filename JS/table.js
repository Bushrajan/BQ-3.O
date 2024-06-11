
function run() {

    let number = Number(document.getElementById("number").value);
    let range = Number(document.getElementById("range").value);

    for (let a = 1; a <= range; a++) {
        document.getElementById("result").innerHTML += "<p>" + number + " x " + a + " = " + number * a + "<p>", "<br>";
    }
}

function clearOutput() {
    document.getElementById("result").innerHTML = "";
    location.reload();
}



