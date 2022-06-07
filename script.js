// JavaScript Document
/* eslint-env es6 */ 

function hello(){

document.getElementById("tid").innerHTML = change;
}

var hour=new Date().getHours();
var change ="";

if (hour >= 9 && hour < 16) {
    change = "Åben";
    document.getElementById("tid").style.color="green";
} else {
    change = "Lukket";
    document.getElementById("tid").style.color="red";
}
