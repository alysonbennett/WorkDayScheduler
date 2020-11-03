// Get any saved events from local storage
var schedule = JSON.parse(localStorage.getItem("schedule")) || {};

// Ready browser for code
$(document).ready(function () {
    // Update clock in real time
    setInterval(update, 1000);

    // Listen for user to type description of event and click save button
    $(".saveBtn").on("click", saveEvent);

    // Run function to change hour row colors
    blockColor();
});

// Define the saving event function
function saveEvent() {
    var eventDesc = $(this).siblings(".description").val().trim();
    var time = $(this).parent().attr("id");

    // Save event description and time to local storage
    schedule[time] = eventDesc;

    localStorage.setItem("schedule", JSON.stringify(schedule))
}

// Set block colors for past, present, and future
function blockColor() {

    var currentBlock = moment().hours();

    $(".time-block").each(function () {
        var time = $(this).find('.hour').text()
        var id = $(this).attr("id")
        var blockHour = moment(time, "hA").hours()
        var description = $(this).find('.description')

        if (blockHour < currentBlock) {
            description.addClass("past");
        }

        else if (blockHour === currentBlock) {
            description.addClass("present");
        }

        else {
            description.addClass("future");
        }

        description.val(schedule[id])

    });
}

// Display current date and time in header
function update() {
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
    $("#currentTime").html(moment().format('h:mm a'));
}