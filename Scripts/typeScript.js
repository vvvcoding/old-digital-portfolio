//script for a type writer effect on websites
var i = 0;
var j = 0;
var textToType = "Every project I've ever created.";
var speed = 30;

function typeWriter() {
    if (i < textToType.length) {
        document.getElementById("typeWritingId").innerHTML += textToType.charAt(i);
        i ++;
        setTimeout(typeWriter, speed);
    }
}