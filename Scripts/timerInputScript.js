/* Script for getting user input for the timer screen */

//variables for current date
const date = new Date();
var currentYear = date.getFullYear();
var currentMonth = date.getMonth() + 1;
var currentDay = date.getDate();

//variables for user input date
let timerYear;
let timerMonth;
let timerDay;

//validation flag
var greenFlag = false;

//when "Submit" button is clicked, get user input for date and validate
document.getElementById("mySubmit").onclick = function() {

    //get date from user input
    timerYear = document.getElementById("yearEntered").value;
    timerMonth = document.getElementById("monthEntered").value;
    timerDay = document.getElementById("dayEntered").value;
    
    /* validate user input date */

    //if user input empty
    if (timerDay == "" && timerMonth == "" && timerYear == "") {
        document.getElementById("printError").textContent = "INVALID, NO INPUT!";
        return;
    }

    //check if user input is number
    if (isNaN(timerDay) || isNaN(timerMonth) || isNaN(timerYear)) {
        document.getElementById("printError").textContent = "ENTER A NUMBER!";
        return;
    }

    if (timerYear < currentYear) {
        //if year is invalid
        document.getElementById("printError").textContent = "INVALID YEAR ENTERED!";
    } else if (timerYear == currentYear) {
        if (timerMonth < currentMonth) {
            //if month is invalid
            document.getElementById("printError").textContent = "INVALID MONTH ENTERED!";
        } else if (timerMonth == currentMonth) {
            if (timerDay < currentDay) {
                //if day is invalid
                document.getElementById("printError").textContent = "INVALID DAY ENTERED!";
            } else {
                document.getElementById("printError").textContent = "";
            }
        } else {
            document.getElementById("printError").textContent = "";
        }
    } else {
        document.getElementById("printError").textContent = "";
    }

    //if all checks are passed, set greenFlag = true
    greenFlag = true;
    console.log(greenFlag);
}

//once date is validated, show countdown to the date
