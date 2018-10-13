
var CrystalGame = function () {
    this.winTotal = 0;
    this.lostTotal = 0;
    this.targetNumber = 0;
    this.currentScore = 0;
    this.crystalPointsArray = [];
    // this.crystalImagesArray = ["assets/images/crystal1.jpeg", "assets/images/crystal6.jpeg", "assets/images/crystal7.jpeg", "assets/images/crystal8.jpeg"];



    // function to setup and start a new instance of the game, get new target number and crystal values
    this.startGame = function () {
        console.log("Initiated StartGame function");
        this.currentScore = 0;
        this.crystalPointsArray = [];
        $(".targetScore").text(this.targetNumber);
        console.log("Target Score: " + this.targetNumber);
        $(".currentScore").text(this.currentScore);
        console.log("Current Score: " + this.currentScore);
        $(".wins").text(this.winTotal);
        console.log("Wins: " + this.winTotal);
        $(".losses").text(this.lostTotal);
        console.log("Lossses: " + this.lostTotal);

        // This function creates a random number between 19-120 inclusive, to be assigned to the games Target Score
        this.randomizeTarget = function () {
            console.log("Initiated randomizeTarget function ");
            this.targetNumber = [Math.floor(Math.random() * 102) + 19];
            console.log("Target Score: " + this.targetNumber);
            $(".targetScore").html(this.targetNumber);
            return (this.targetNumber);

        }
        // This function creates an array of 4 random numbers between 1-12 inclusive, to be assigned to each Crystals Points value
        this.randomizeCrystalPoints = function () {
            for (j = 1; j <= 4; j++) {
                console.log("Initiated randomizeCrystalPoints function ");
                var randomCrystalPoints = [Math.floor(Math.random() * 12) + 1];
                this.crystalPointsArray.push(parseInt(randomCrystalPoints));
                // imageCrystal.attr("data-crystalvalue", numberOptions[i]);
                console.log("Crystals Scores: " + this.crystalPointsArray);
            }
            return (this.crystalPointsArray);
        }
        this.randomizeTarget();
        this.randomizeCrystalPoints();
    }
    // This function looks for a click event on a crystal image, updates the current score and checks if you have won or lost
    this.clickCrystals = function (crystalPointsArray) {
        console.log("Initiated clickCrystals function ");
        console.log("first position in crystalpointsarray: " + this.crystalPointsArray[0]);
        console.log("target number: " + this.targetNumber);
        console.log("current score: " + this.currentScore);
        var self=this;
        // On Click function to determine which crystal image was clicked
        $(".crystal-image").on("click", function () {

            // If statements to check which crystal was checked and add the value to the current score
            console.log(self.crystalPointsArray);
            var crystalScore = 0;

            if ($(this).hasClass('crystalOne')) {
                console.log("Crystal 1 if: " + $(this).hasClass('crystalOne'));
                console.log(self.crystalPointsArray[0]);
                crystalScore = parseInt(self.crystalPointsArray[0]);
                console.log("Case 1 crystalScore: " + crystalScore);
            }
            else if ($(this).hasClass('crystalTwo')) {
                console.log("Crystal 2 if: " + $(this).hasClass('crystalTwo'));
                console.log(self.crystalPointsArray[1]);
                crystalScore = parseInt(self.crystalPointsArray[1]);
                console.log("Case 1 crystalScore: " + crystalScore);
            }
            else if ($(this).hasClass('crystalThree')) {
                console.log("Crystal 3 if: " + $(this).hasClass('crystalThree'));
                console.log(self.crystalPointsArray[2]);
                crystalScore = parseInt(self.crystalPointsArray[2]);
                console.log("Case 1 crystalScore: " + crystalScore);
            }
            else if ($(this).hasClass('crystalFour')) {
                console.log("Crystal 4 if: " + $(this).hasClass('crystalFour'));
                console.log(self.crystalPointsArray[3]);
                crystalScore = parseInt(self.crystalPointsArray[3]);
                console.log("Case 1 crystalScore: " + crystalScore);
            }

            self.currentScore += crystalScore;
            console.log(self.currentScore);
            $(".currentScore").text(self.currentScore);
            // console.log(typeof self.targetNumber);
            self.targetNumber = parseInt(self.targetNumber);
            // console.log(typeof self.targetNumber);
            // console.log("Target Number"+self.targetNumber);
            if (self.currentScore === self.targetNumber) {
                alert("Winner Winner Chicken Dinner !!! Congratulations you have won the game.");
                console.log(typeof self.winTotal);
                self.winTotal++
                $(".wins").text(self.winTotal);
                console.log("write winTotal: "+$(".wins").text(self.winTotal));
                self.startGame();
            }
            else if (self.currentScore > self.targetNumber) {
                alert("LOSER !!! I'm sorry you have bust and scored to may points.  You have lost the game.");
                console.log(typeof self.lostTotal);
                self.lostTotal++
                console.log("write lostTotal: "+$(".losses").text(self.lossTotal));
                $(".losses").text(self.lostTotal);
                self.startGame();
            }
            // return (self.currentScore);
        })
    }
}

$(document).ready(function () {
    var game = new CrystalGame();
    game.startGame();
    game.clickCrystals();
})
