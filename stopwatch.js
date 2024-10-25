/*
    Name: Jack Ou
    Class: CPSC332
    Assignment: Homework 6 jQuery
    Last Modified: 10/24/2024
*/
$(document).ready(function() {
    var seconds = "00";
    var tens = "00";
    var interval;

    /*$("#timer").addClass("timer-background");
    $("#timer").css("background-color", "grey");*/

    //modify these
    var $appendTens = $("#tens");
    var $appendSeconds = $("#seconds");
    var $buttonStart = $("#button-start");
    var $buttonStop = $("#button-stop");
    var $buttonReset = $("#button-reset");

    $appendTens.html(tens);
    $appendSeconds.html(seconds);

    //button functionality
    $buttonStart.on("click", function() {
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
        //style manipulation
        $("#seconds").parent().css("background-color", "rgb(51, 165, 50)");

        });

    $buttonStop.on("click", function() {
        clearInterval(interval);
        //style manipulation
        if (seconds !== "00" || tens !== "00") {
            $("#seconds").parent().css("background-color", "rgb(251, 18, 47)"); // Red when paused
        }
    });

    $buttonReset.on("click", function() {
        clearInterval(interval);
        tens = "00";
        seconds = "00";
        $appendTens.html(tens);
        $appendSeconds.html(seconds);
        //style manipulation
        $("#seconds").parent().css("background-color", "grey").stop(true, true).css("opacity", 1);
    });

    $("#seconds").parent().addClass("timer-background");
    $("#seconds").parent().css("background-color", "grey");

    $("#button-start, #button-stop, #button-reset").addClass("button-style");
    $(".button-style").css({
        "border": "2px solid black",
        "background-color": "lightblue",
        "font-size": "16px",
        "padding": "10px 20px",
        "border-radius": "5px",
        "cursor": "pointer",
        "margin": "10px"
    });

    //timer
    function startTimer() {
        tens++;

        if (tens < 9) {
            $appendTens.html("0" + tens);
        }

        if (tens > 9) {
            $appendTens.html(tens);

        }

        if (tens > 99) {
            console.log("seconds");
            seconds++;
            $appendSeconds.html("0" + seconds);
            tens = 0;
            $appendTens.html("0" + 0);
        }

        if (seconds > 9) {
            $appendSeconds.html(seconds);
        }
    }
});