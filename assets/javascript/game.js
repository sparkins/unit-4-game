
var CrystalGame = function () {
    this.winTotal = 0;
    this.lostTotal = 0;
    this.targetNumber = 0;
    this.cystalPoints = [0, 0, 0, 0];
    this.currentScore = 0;

    $(".tragetScore").text(targetNumber);
    $(".currentScore").text(currentScore);
    $(".wins").text(winTotal);
    $(".losses").text(lostTotal);
    };

    this.startGame = function () {
        this.currentScore = 0;
        this.randomizeTarget(randomTargetScore);
        this.displayCrystals = function () {
            for (var i = 1; i <= 4; i++) {
                // Create an image for each Crystal, assign it's attributes and display it on screen
                var crystalImage = $("<img>");
                crystalImage.addClass("crystal-image");
                crystalImage.attr("src", "assets/images/crystal" + i + ".jpg");
                crystalImage.attr("crystalValue", this.randomizeCrystalPoints(randomCrystalPoints));
                console.log ("Crystal"+i+": "+crystalImage);
                $("#crystals").append(crystalImage);
                console.log (crystalImage);
            }
        }

    // This function creates a random number between 19-120 inclusive, to be assigned to the games Target Score
    this.randomizeTarget = function (randomTargetScore) {
        var randomTargetScore = [Math.floor(Math.random() * 18 - 121)];
        return (randomTargetScore);

    }
    // This function creates a random number between 1-12 inclusive, to be assigned to the Crystals Points value
    this.randomizeCrystalPoints = function (randomCrystalPoints) {
        var randomCrystalPoints = [Math.floor(Math.random() * 0 - 13)];
        return (randomCrystalPoints);
    }
    };

    // This function looks for a click event on a crystal image, updates the current score and checks if you have won or lost
    this.clickCrystals = function () {
        $(".crystal-image").on("click", function () {
            var crystalScore = ($(this).attr("crystalValue"));
            crystalScore = parseInt(crystalScore);
            crystalPoints += crystalScore;
            $("#currentScore").text(crystalPoints);
            if (crystalPoints === targetNumber) {
                alert ("Winner Winner Chicken Dinner !!! Congratulations you have won the game.");
                this.winTotal++
                $("#wins").text(winTotal);

            }
            else if (crystalPoints > targetNumber) {
                alert ("LOSER !!! I'm sorry you have bust and scored to may points.  You have lost the game.");
                this.lostTotal++
                $("#losses").text(lostTotal);
            }
        });
    };
}

$(document).ready(function () {
    var game = new CrystalGame();
    game.startGame();
})
