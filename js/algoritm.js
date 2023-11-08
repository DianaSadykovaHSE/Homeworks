

function Verify (){
console.log ("a,b,c,d")
let a = parseFloat(elementA.innerText);
let b = parseFloat(elementB.innerText);
let c = parseFloat(elementC.innerText);
let d = parseFloat(elementD.innerText);
console.log(a,b,c,d)

let high_1, low_1;
if (a > b) {
high_1 = a;
low_1 = b;
}
else {
high_1 = b;
low_1 = a;
}

let high_2, low_2
if (c > d) {
high_2 = c;
low_2 = d;
}

else {
high_2 = d;
low_2 = c;
}

if (high_1 <= low_2) {
Result = 'может';
document.getElementById('Result').innerText=Result;
}
else if (high_1 <= high_2 && low_1 <=low_2) {
Result = 'может';
document.getElementById('Result').innerText=Result;
}
else {
Result = "не может";
document.getElementById('Result').innerText=Result;
}
}

const elementA = document.getElementById('a');
const elementB = document.getElementById('b');
const elementC = document.getElementById('c');
const elementD = document.getElementById('d');

const elementVerify = document.getElementById("Verify");
elementVerify.addEventListener('click', Verify);
