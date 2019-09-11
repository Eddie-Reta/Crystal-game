//variable for targeted number
var highest = 120;
var lowest = 19;

var winningNumber = 0;

// winning and losing counter variables
var wins = 0;
var losses = 0;
var counter = 0;

//function that randoms the score you need to acheive
function number() {
    randomNumber = Math.floor(Math.random() * (highest - lowest + 1)) + lowest;
    winningNumber = randomNumber;
    // console.log(winningNumber);
    $("#target").text(winningNumber);
}

/////////////////////////////////////////////////////////////////

var high = 12;
var low = 1;
var crystal = [$("#ruby"), $("#sapphire"), $("#emerald"), $("#diamond")]
var randomNumber = 0;

function randomCrystalPoints() {
    // loop through the crystals to give them a individual score

    for (var i = 0; i < crystal.length; i++) {
        var randomNum = Math.floor(Math.random() * (high - low + 1)) + low;
        var c = crystal[i]
        c.attr("data-crystalValue", randomNum);
    };
    randomNumber = randomNum;
};
////////////////////////////////////////////////////////////////////

//add click event to images
$(".crystal").on("click", function () {

    var crystalValue = ($(this).attr("data-crystalValue"));

    crystalValue = parseInt(crystalValue);

    counter += crystalValue;
    $("#counter").text(counter);
    console.log(counter);
    if (counter === winningNumber) {
        wins++;
        $("#Wins").text("Wins" + " =" + " " + wins)
        alert("You win!");
        counter = 0;
        $("#counter").text(counter)
        number();
        randomCrystalPoints();

    } else if (counter >= winningNumber) {
        alert("You lose!!");
        losses++;
        $("#Losses").text("Losses" + " =" + " " + losses);
        counter = 0;
        $("#counter").text(counter)
        number();
        randomCrystalPoints();

    }

});

number();
randomCrystalPoints();