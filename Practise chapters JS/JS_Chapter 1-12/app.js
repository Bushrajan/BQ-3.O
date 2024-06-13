/*
***************** Chapter 1-12 practise task *****************
*******  1. Alerts                                  **********
*******  2. Variables for Strings                   **********
*******  3. Variables for Numbers                   **********
*******  4. Variable Names Legal and Illegal        **********
*******  5. Math Expressions: familiar operators    **********
*******  6. Math Expressions: unfamiliar operators  **********
*******  7. Math Expressions: eliminating ambiguity **********
*******  8. Concatenating text strings              **********
*******  9. Prompts                                 **********
*******  10. if statements                          **********
*******  11. Comparison operators                   **********
*******  12. if...else and else if statements       **********
**************************************************************/

// alert("I am Running....");
// window.alert("Bushra Jan is doing coding today... ")

//------------------variable of all types ------------------------------
variable = "Bushra"
v = "Jan"
document.write("<br><br>Variale name: ", variable, " ", v)

let car = "car"
console.log("Variale let: ", car);
document.write("<br><br><br> Variale let: ", car)

const bike = "bike"
console.log("Variale const: ", bike)
document.write("<br><br><br> Variale let: ", bike)

var house = "house"
house = "home"
console.log("Variale var", house)
document.write("<br><br><br> Variale var: ", house)
//--------------------------variable in number --------------------------------------------
var variablenumber = 9
variablnumber = 0
console.log("Variale in number: ", variablenumber)
document.write("<br><br><br> Variale in number: ", variablenumber)
//----------------------------------------------------------------------
var originalnumber = 9;
let newnumber = originalnumber + 25;
console.log("Number with variable addition: ", newnumber)
document.write("<br><br><br> Number with variable addition: ", newnumber)
// ------------------------------ illegel cases of variable ----------------------------------------
userResponse = "caseOne "
userResponseTime = "caseTwoHy "
userResponseTimeLimit = "caseThreeHyYay "
response = "casefour "

console.log("Variable all Cases: ", userResponse)
console.log("Variable all Cases: ", userResponseTime,)
console.log("Variable all Cases: ", userResponseTimeLimit)
console.log("Variable all Cases: ", response)
document.write("<br><br><br> Variable all Cases: ", userResponse, "&nbsp;", userResponseTime, "&nbsp;", userResponseTimeLimit, "&nbsp;", response)
// ---------------------------------All mathematical operations  -------------------------------------

const a = 2 + 2;
const b = 12 - 2;
const c = 9 * 2;
const d = 6 / 2;
const e = 4 % 2;
const f = 9 ** 2;
const g = 2 < 0;
const h = 9 > 2;
const i = 9 == 2;
const j = 2 === 2;
const k = 8 <= 2;
const l = 3 >= 2;
const m = 5 > 2 && 9 < 2;
const n = 2 > 2 || 4 < 2;
const o = 3 > 2 != 6 > 2;
// const p = 3;
// const q = p+=3 ;
// const r = 5 ;
// const s = --r ;

document.write("<br><br><br><br>Mathematical operators<br>--------------- 2+2  = ", a)
document.write("<br><br>--------------- 12 -2   = ", b)
document.write("<br><br>--------------- 9 * 2   = ", c)
document.write("<br><br>--------------- 6 / 2   = ", d)
document.write("<br><br>--------------- 4 % 2   = ", e)
document.write("<br><br>--------------- 9 ** 2  = ", f, "<br>")
document.write("<br><br> 2 < 0   = ", g)
document.write("<br><br> 9 > 2   = ", h, "<br>")
document.write("<br><br>--------------- 9 == 2  = ", i)
document.write("<br><br>--------------- 2 === 2 = ", j)
document.write("<br><br>--------------- 8 <= 2  = ", k)
document.write("<br><br>--------------- 3 >= 2  = ", l, "<br>")
document.write(`<br><br> 5 > 2  &&  9 < 2   = `, m)
document.write(`<br><br> 2 > 2  ||  4 < 2   = `, n)
document.write(`<br><br> 3 > 2  !=  6 > 2   = `, o)
// document.write(`<br>--------------- 3 = `,p)
// document.write(`<br>--------------- 3++ = `,q)
// document.write(`<br>--------------- 5  = `,r)
// document.write(`<br>--------------- --5  = `,s)

console.log(` 2 + 2      = `, a)
console.log(` 12- 2      = `, b)
console.log(` 9 * 2      = `, c)
console.log(` 6 / 2      = `, d)
console.log(` 4 % 2      = `, e)
console.log(` 9 ** 2     = `, f)
console.log(` 2 < 0      = `, g)
console.log(` 9 > 2      = `, h)
console.log(` 9 == 2     = `, i)
console.log(` 2 === 2    = `, j)
console.log(` 8 <= 2     = `, k)
console.log(` 3 >= 2     = `, l)
console.log(` 5 > 2 && 9<2   = `, m)
console.log(` 2 > 2 || 4<2   = `, n)
console.log(` 3 > 2 != 6>2   = `, o)
// console.log(` 3 = `,p)
// console.log(` 3++ = `,q)
// console.log(` 5  = `,r)
// console.log(` --5  = `,s)
// ------------------ Maths operations (Eliminating ambiguity) combine operations  ----------------------
let no1 = 10
let no2 = 56
let no3 = 20
let total = 10 * 56 + 20; //like this
resultOfComputation = ((2 * 4) * 4) + 2; // like this as you want
document.write("<br><br><br>Maths operations (Eliminating ambiguity) <br> Totalcost of 3 things : 10*56+20 =  ", total);
console.log("Totalcost of 3 things : 10*56+20 =  ", total)
//------------------------- concatination + -------------------------------------------------------------------------------------------

var message = "Thanks, ";
var userName = "Susan";
var banger = "!";
var customMess = message + userName + banger;
document.write("<br><br><br>String Concatenation <br> ", customMess);
console.log("Customized message : ", customMess);

//--------------------- use of prompt --------------------------------------------

// var prompt = prompt("still coding...")
// document.write("<br><br> Prompt... ",prompt);
// console.log("Prompt... ",prompt);
//-------------------- comparision with if statement ----------------------------------
let x = "bushra";
if (x == "bushra") {
    console.log("if statement");
}
document.write("<br><br> if statement <br> Correct!");
console.log("if statement ----- Correct!");
//-------------------------- strict comparision with statement & pre decrement----------------------------
var correctAnswer = "Vatican";
let ab = 100;
if (x === "Vatican") {
    --ab;
    console.log("pre decrement", ab);
    console.log("pre decrement", ab);
    console.log("Correct Answer");
    document.write("<br><br> if statement with else Correct Answer");
    document.write("<br><br> pre decrement ", ab);
}
else {
    console.log("Wrong Answer");
    document.write("<br><br> if statement with else Wrong Answer");
}
//---------------- strict comparision & use of post increment (add)   -------------------------------
let y = "Bushra";
let z = 56;
if (y === "Bushra") {
    z++;
    console.log("post increment", z);
    console.log("Correct Answer");
    document.write("<br><br> Comparision operator === : Correct Answer");
    document.write("<br><br> post increment ",z);
}
else {
    console.log("Wrong Answer");
    document.write("<br> Comparision operator === : Wrong Answer");
}

//--------------------------------------------------------------------------
document.write("<br><br><br><br> all chapters are done ");