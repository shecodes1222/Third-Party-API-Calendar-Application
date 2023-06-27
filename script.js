//set variables
var saveBtn = $(".saveBtn");
var currentHour = moment().format("HH"); // Variable for current hour 
var currentHourInt = parseInt(currentHour); // Parse so hours return as integers


$(document).ready(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage.
    clickSave();

    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. 
    $('#currentDay').append();

    function addDate() { 
        $("#currentDay").html(moment().format('MMMM Do YYYY, h:mm a'));
    
    } setInterval(addDate, 1000);


    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements
    populateLocalStorage();

    // TODO: Add code to display the current date in the header of the page.
    liveTime();

});
//Save events button
function clickSave() {
    $(".saveBtn").on("click", function () {
        console.log(this);
        var description = $(this).siblings(".description").val();
        var hourId = $(this).parent().attr("id");

        localStorage.setItem(hourId, description);
    });

}

    // use 24 hour time format so for loop from 9 to 17
    for (var i = 0; i <= 12; i++) {

        var inputHour = $("#" + i + "Row").attr("data-time"); // Variable for the hour of the row 
        var inputHourInt = parseInt(inputHour); // Parse it so that hour returns as an integer

        if (currentHourInt === inputHourInt) {
            $("#" + i + "Row").addClass("present"); // its supposed to change to red if within the present hour 
        }
        if (currentHourInt > inputHourInt) { // its supposed to change to grey if hour is in the future 
            $("#" + i + "Row").addClass("past");
        }
        if (currentHourInt < inputHourInt) { // its supposed to change to green if hour is in the future 
            $("#" + i + "Row").addClass("future");
        }

    }


function populateLocalStorage() {
    // use 24 hour time format/for loop from 9 to 17
    for (var workHour = 9; workHour <= 17; workHour++) {
        var timeBlockId = "#" + workHour;
        var timeBlockIdDescription = timeBlockId + " .description";

        $(timeBlockIdDescription).val(localStorage.getItem(workHour));
    }

}

function liveTime() {
    var nowDayJs = dayjs();
    $("#currentDay").text(nowDayJs);
    setInterval(liveTime, 1000);
}