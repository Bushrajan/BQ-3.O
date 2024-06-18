
function run() {
    let number = Number(document.getElementById("number").value);
    let range = Number(document.getElementById("range").value);

    for (let i=1; i<=range; i++) {
        document.getElementById("result").innerHTML += "<p>" + number + " x " + i + " = " + number * i + "<p>", "<br>";
    }
}

function clearOutput() {
    document.getElementById("result").innerHTML = "";
    location.reload();
}



