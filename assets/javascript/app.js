//setTimeout(finish, 1000 * 300)

var intervalId;
var time = 300;
var score = 0;

function finish() {
var radios = document.getElementsByName("choice");
var checked = false;
var userAnswer = 0;

for (var i=0; i < radios.length; i++) {
    if (radios[i].checked) {
        checked = true;
        userAnswer += radios[i].value;
    }
}
    console.log(parseInt("userAnswer, 26"))
}

function start() {
    intervalId = setInterval(count, 1000);
}


function count() {
    time--;
    var converted = timeConverter(time);
    $("#timer").text(converted);
}

function timeConverter(t) {
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (minutes === 0) {
        minutes = "00";
    }

    else if (minutes < 10) {
        minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
}

window.onload = function() {
    start();
}

$(".finish").on("click", function() {
    finish();
})























//$(".finish").on("click", function() {
    //var Value = $("input[name=optradio]:checked").attr("id");
    //console.log("Look here " + Value)
//    if ($("input[name=optradio]:checked").attr("id") ==="correct-one") {
//        score++;
 //       console.log(score)
 //   };
//})
