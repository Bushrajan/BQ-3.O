
/***********************************************************/

function markSheet() {
    let eng = +document.getElementById("eng").value
    let maths = +document.getElementById("maths").value
    let Chem = +document.getElementById("chem").value

    if (eng >= 100 || maths >= 100 || Chem >= 100) {
        alert("Bhai max marks 100 hain......")
        window.location.reload()
    }
    //for total
    let TotalMarks = 300
    document.getElementById("total").innerHTML = TotalMarks
    //for percentage
    let obt = document.getElementById("obt").innerHTML = maths + eng + Chem
    let per = document.getElementById("per").innerHTML = obt / TotalMarks * 100
    if (per >= 80 && per <= 100) {
        document.getElementById("grade").innerHTML = "A+👌";
        document.getElementById("remarks").innerHTML = "keep it up";
    }
    else if (per >= 70 && per <= 80) {
        document.getElementById("grade").innerHTML = "A😁 ";
        document.getElementById("remarks").innerHTML = "improve more...";
    }
    else if (per >= 60 && per <= 70) {
        document.getElementById("grade").innerHTML = "B🤦‍♂️";
        document.getElementById("remarks").innerHTML = "need more hardword";
    }
    else if (per >= 50 && per <= 60) {
        document.getElementById("grade").innerHTML = "C😢";
        document.getElementById("remarks").innerHTML = "don't qive up you can to better";
    }
    else if (per >= 40 && per <= 50) {
        document.getElementById("grade").innerHTML = "D😲";
        document.getElementById("remarks").innerHTML = "you still have a chance to improve... ";
    }
    else if (per < 40) {
        document.getElementById("grade").innerHTML = "Fail🤷‍♂️";
        document.getElementById("remarks").innerHTML = "aap ka kuch nhi ho skta jabtk app kuch na kr looo...";
    }
}


