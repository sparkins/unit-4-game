
var CrystalGame = function () {
    this.winTotal = 0;
    this.lostTotal = 0;
    this.targetNumber = 0;
    this.currentScore = 0;
    this.crystalPointsArray = []
    this.crystalImagesArray = ["assets/images/crystal1.jpeg", "assets/images/crystal2.jpeg", "assets/images/crystal3.jpeg", "assets/images/crystal4.jpeg"];

    $(".targetScore").text(this.targetNumber);
    console.log("Target Score: "+this.targetNumber);
    $(".currentScore").text(this.currentScore);
    console.log("Current Score: "+this.currentScore);
    $(".wins").text(this.winTotal);
    console.log("Wins: "+this.winTotal);
    $(".losses").text(this.lostTotal);
    console.log("Lossses: "+this.lostTotal);

    this.startGame = function () {
        console.log("Initiated StartGame function");
        this.currentScore = 0;
        this.randomizeTarget(this.targetNumber);
        this.randomizeCrystalPoints(this.randomCrystalPoints);
        // this.displayCrystals = function () {
        //     for (var i = 1; i <= 4; i++) {
        //         // Create an image for each Crystal, assign it's attributes and display it on screen
        //         var crystalImage = $("<img>");
        //         crystalImage.addClass("crystal-image");
        //         crystalImage.attr(this.crystalImages[i]);
        //         crystalImage.attr("crystalValue", this.randomizeCrystalPoints(this.randomCrystalPoints));
        //         console.log ("Crystal"+i+": "+crystalImage);
        //         $("#crystals").append(crystalImage);
        //         console.log (crystalImage);
        //     }}
        //     return (this.randomCrystalPoints);

    }

    // This function creates a random number between 19-120 inclusive, to be assigned to the games Target Score
    this.randomizeTarget = function (targetNumber) {
        console.log ("Initiated randomizeTarget function ");
        this.targetNumber = [Math.floor(Math.random() * 102)+19];
        console.log ("Target Score: "+this.targetNumber);
        $("#targetScore").html(this.targetNumber);
        return (targetNumber);

    }
    // This function creates an array of 4 random numbers between 1-12 inclusive, to be assigned to each Crystals Points value
    this.randomizeCrystalPoints = function (crystalPointsArray) {
        for (j=1;j<=4;j++) {
            console.log ("Initiated randomizeCrystalPoints function ");
            var randomCrystalPoints = [Math.floor(Math.random() * 12)+1];
            this.crystalPointsArray.push(parseInt(randomCrystalPoints));
            console.log ("Crystals Scores: "+this.crystalPointsArray);
        }
        return (crystalPointsArray);
    }


    // This function looks for a click event on a crystal image, updates the current score and checks if you have won or lost
    this.clickCrystals = function (currentScore, targetNumber) {
        console.log ("Initiated clickCrystals function ");
        $(".crystal-image").on("click", function () {
            switch (".crystal-image") {
                case 1:
                    var crystalImage = $("crystalOne");
                    var crystalScore = crystalPointsArray[0];
                    console.log ("crystalScore: "+crystalScore);
                case 2:
                    var crystalImage = $("crystalOne");
                    var crystalScore = crystalPointsArray[1];
                    console.log ("crystalScore: "+crystalScore);    
                case 3:
                    var crystalImage = $("crystalOne");
                    var crystalScore = crystalPointsArray[2];
                    console.log ("crystalScore: "+crystalScore);
                case 4:
                    var crystalImage = $("crystalOne");
                    var crystalScore = crystalPointsArray[3];
                    console.log ("crystalScore: "+crystalScore);
            }
            //var crystalScore = ($(this).attr("crystalValue"));
            //console.log ($(this).attr("crystalValue"));
            console.log(typeof crystalScore);
            crystalScore = parseInt(crystalScore);
            currentScore += crystalScore;
            $("#currentScore").text(currentScore);

            if (currentScore === targetNumber) {
                alert ("Winner Winner Chicken Dinner !!! Congratulations you have won the game.");
                this.winTotal++
                $("#wins").text(winTotal);

            }
            else if (currentScore > targetNumber) {
                alert ("LOSER !!! I'm sorry you have bust and scored to may points.  You have lost the game.");
                this.lostTotal++
                $("#losses").text(lostTotal);
            }
        });
        return (currentScore);
    }
}

$(document).ready(function () {
    var game = new CrystalGame();
    game.startGame();
    game.clickCrystals();
})
