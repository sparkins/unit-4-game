
var CrystalGame = function () {
    this.winTotal = 0;
    this.lostTotal = 0;
    this.targetNumber = 0;
    this.currentScore = 0;
    this.crystalScore = 0;
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
        $(".targetScore").html(this.targetNumber);
        return (this.targetNumber);

    }
    // This function creates an array of 4 random numbers between 1-12 inclusive, to be assigned to each Crystals Points value
    this.randomizeCrystalPoints = function (crystalPointsArray) {
        for (j=1;j<=4;j++) {
            console.log ("Initiated randomizeCrystalPoints function ");
            var randomCrystalPoints = [Math.floor(Math.random() * 12)+1];
            this.crystalPointsArray.push(parseInt(randomCrystalPoints));
            console.log ("Crystals Scores: "+this.crystalPointsArray);
        }
        return (this.crystalPointsArray);
    }


    // This function looks for a click event on a crystal image, updates the current score and checks if you have won or lost
    this.clickCrystals = function (currentScore, targetNumber, crystalScore) {
        console.log ("Initiated clickCrystals function ");
        $(".crystal-image").on("click", function () {
            this.crystalImage = (".crystal-image");
            console.log(this);
        
            if (this===$(".crystalOne")) {
                this.crystalScore = this.crystalPointsArray[0];
                console.log ("Case 1 crystalScore: "+crystalScore);
            }
            else if (this===$(".crystalTwo")) {
                this.crystalScore = crystalPointsArray[1];
                console.log ("Case 2 crystalScore: "+crystalScore);  
            }
            else if (this===$(".crystalThree")) {                    
                this.crystalScore = crystalPointsArray[2];
                console.log ("case 3 crystalScore: "+crystalScore);
            }
            else if (this===$(".crystalFour")) {                    
                var crystalScore = crystalPointsArray[3];
                console.log ("case 4 crystalScore: "+crystalScore);
            }
            
            //var crystalScore = ($(this).attr("crystalValue"));
            //console.log ($(this).attr("crystalValue"));
            console.log(typeof this.crystalScore);
            this.crystalScore = parseInt(crystalScore);
            this.currentScore += this.crystalScore;
            console.log(this.crystalScore);
            $(".currentScore").text(this.currentScore);

            if (this.currentScore === this.targetNumber) {
                alert ("Winner Winner Chicken Dinner !!! Congratulations you have won the game.");
                this.winTotal++
                $("#wins").text(this.winTotal);

            }
            else if (this.currentScore > this.targetNumber) {
                alert ("LOSER !!! I'm sorry you have bust and scored to may points.  You have lost the game.");
                this.lostTotal++
                $("#losses").text(this.lostTotal);
            }
        })
        return (this.currentScore);
    }
}

$(document).ready(function () {
    var game = new CrystalGame();
    game.startGame();
    game.clickCrystals();
})
