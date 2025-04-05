var h1_element = document.getElementsByTagName("h1");
console.log(h1_element[0]);
console.log(h1_element[1]);
console.log(h1_element[0].innerText);
console.log(h1_element[0].innerText="Hello world");

h1_element[0].innerHTML="<h6>Hello IJSE</h6>";

document.getElementById("subject01");
document.getElementById("subject02");
document.getElementById("subject03");

console.log(document.getElementById("subject01"));
console.log(document.getElementById("subject02"));
console.log(document.getElementById("subject03"));

subject01.innerText="Hello";


console.log(document.getElementsByClassName("mysubject01"));
var mysubject01_element = document.getElementsByClassName("mysubject01");

console.log(mysubject01_element[1]);

var myname_element = document.getElementsByName("myname");

console.log(document.querySelector("h6>p")); // only first element//
console.log(document.querySelectorAll("h6>p"));





