$(document).ready(function () {

    var totalScore = 0;
    var wins = 0;
    var losses = 0;

    var scoreNeeded = Math.floor(Math.random() * 102 + 19);
    $("#targetScore").html(scoreNeeded)

    var number1 = Math.floor(Math.random() * 12 + 1);
    var number2 = Math.floor(Math.random() * 12 + 1);
    var number3 = Math.floor(Math.random() * 12 + 1);
    var number4 = Math.floor(Math.random() * 12 + 1);

    $("#wins").html(wins)
    $("#losses").html(losses)

    $("#crystal1").on("click", function () {
        totalScore = totalScore + number1;
        $("#playerScore").html(totalScore)

        if (totalScore == scoreNeeded) {
            userWin();
        } else if (totalScore > scoreNeeded) {
            userLoss();
        }
    })

    $("#crystal2").on("click", function () {
        totalScore = totalScore + number2;
        $("#playerScore").html(totalScore)

        if (totalScore == scoreNeeded) {
            userWin();
        } else if (totalScore > scoreNeeded) {
            userLoss();
        }
    })

    $("#crystal3").on("click", function () {
        totalScore = totalScore + number3;
        $("#playerScore").html(totalScore)

        if (totalScore == scoreNeeded) {
            userWin();
        } else if (totalScore > scoreNeeded) {
            userLoss();
        }
    })

    $("#crystal4").on("click", function () {
        totalScore = totalScore + number4;
        $("#playerScore").html(totalScore)

        if (totalScore == scoreNeeded) {
            userWin();
        } else if (totalScore > scoreNeeded) {
            userLoss();
        }
    })

    $(".btn").on("click", function() {
        reset();
    })

    function userWin() {
        $("#winnerLoser").html("<b>You won!</b>");
        wins++;
        $("#wins").html(wins);
    }

    function userLoss() {
        $("#winnerLoser").html("<b>You lost!</b>");
        losses++;
        $("#losses").html(losses);
    }

    function reset() {
        $("#winnerLoser").html("");
        totalScore = 0;
        scoreNeeded = Math.floor(Math.random() * 102 + 19);
        $("#targetScore").html(scoreNeeded)
        number1 = Math.floor(Math.random() * 12 + 1);
        number2 = Math.floor(Math.random() * 12 + 1);
        number3 = Math.floor(Math.random() * 12 + 1);
        number4 = Math.floor(Math.random() * 12 + 1);
        $("#playerScore").html(totalScore)
    }

})


