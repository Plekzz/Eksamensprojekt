// JavaScript Document
/* eslint-env es6 */ 

function hello(){

document.getElementById("tid").innerHTML = change;
}

var hour=new Date().getHours();
var change ="";

if (hour >= 9 && hour < 16) {
    change = "Åben";
    document.getElementById("tid").style.color = "#44c44a";
} else {
    change = "Lukket";
    document.getElementById("tid").style.color = "#f20b07";
}
