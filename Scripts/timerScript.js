/* Script for setting timers on website */

function updateTime() {
    //initialize variables
    const date = new Date();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var midday = "";

    //fix timing errors
    if ((hour > 12) && (hour < 24)) {
        hour -= 12;
        midday = "PM";
    } else if ((hour < 12)) {
        midday = "AM";
    } else if (hour == 12) {
        midday = "PM"
    }

    //format and print to screen
    document.getElementById("demo").innerHTML = hour + " : "
    + minutes.toString().padStart(2, '0') + " : " 
    + seconds.toString().padStart(2, '0') + " " + midday;
}

//updates the time every second (1000 milliseconds)
setInterval(updateTime, 1000);