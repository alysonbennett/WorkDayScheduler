// Display current date in header
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
$("#currentTime").text(moment().format("LT"));

// Ready browser for code
$(document).ready(function() {

    // Listen for user to click buttons
    $(".saveBtn").on("click", function(){
   
        var eventDesc = $("this").siblings(".description").val.trim();
        var time = $("this").parent().attr("id");

        // Save event description and time to local storage
        localStorage.setItem(time, eventDesc);
    });

    // Set block colors for past, present, and future
    function blockColor() {

    // var currentBlock = moment().hours();
    // var blockHour = moment().isBefore(Moment|String|Number|Date|Array);

    $(".time-block").each(function() {


        if ($(".time") < currentBlock) {
            $("this").addClass("past");
        }

        else if (blockHour === currentBlock) {
            $("this").addClass("present");
        }

        else {
            $("this").addClass("future");
        }
    });

    }

    blockColor();


    // Load saved data from local storage
    $("#hour-8 .description").val(localStorage.getItem("hour-8"));
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
    $("#hour-18 .description").val(localStorage.getItem("hour-18"));

});
