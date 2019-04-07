// create variables
//variable for targeted number
var highest = 120;
var lowest = 19;
var winningNumber = Math.floor(Math.random() * (highest - lowest + 1)) + lowest;
// console.log(winningNumber);
$("#target").html(winningNumber);
// winning and losing counter variables
var wins = 0;
var losses = 0;
var counter = 0;
//number options randomizer  for crystals
var high = 12;
var low = 1;
 var numberOption = Math.floor(Math.random() * (high - low + 1)) + low;
//console.log(numberOption) ;
//loop to assign every crystal a value
for (var i = 0; i < numberOption; i++) {
    var ruby = $("#ruby");
    ruby.addClass("crystal-image");
    ruby.attr("data-crystalValue", numberOption);
    //console.log(ruby);
};
for (var i = 0; i < numberOption; i++) {
    var sapphire = $("#sapphire");
    sapphire.addClass("crystal-image");
    sapphire.attr("data-crystalValue", numberOption);
   // console.log(sapphire);
};
for (var i = 0; i < numberOption; i++) {
    var emerald = $("#emerald");
    emerald.addClass("crystal-image");
    emerald.attr("data-crystalValue", numberOption);
    //console.log(emerald);
};
for (var i = 0; i < numberOption; i++) {
    var diamond = $("#diamond");
    diamond.addClass("crystal-image");
    diamond.attr("data-crystalValue", numberOption);
    //console.log(diamond);
}
//add click event to images
$(".crystal-image").on("click", function () {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    
    crystalValue = parseInt(crystalValue);
    
    counter += crystalValue;
    $("#counter").text(counter);
    console.log(counter);
    if (counter === winningNumber) {
        wins++;
        $("#Wins").text("Wins" + "="+ " " + wins)
        alert("You win!");
    }
    else if (counter >= winningNumber) {
        alert("You lose!!");  
        losses++;
    $("#Losses").text("Losses" + "="+ " " + losses)
    }

})
