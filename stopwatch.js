$(document).ready(function() {
    var seconds = "00";
    var tens = "00";
    var interval;

    /*$("#timer").addClass("timer-background");
    $("#timer").css("background-color", "grey");*/

    $("#seconds").parent().addClass("timer-background");
    $("#seconds").parent().css("background-color", "grey");

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
        $("#seconds").parent().css("background-color", "rgb(251, 18, 47)");

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