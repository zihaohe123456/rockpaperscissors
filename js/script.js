// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
var userChoice=$("#input").val();
var computerChoice=Math.random();
var winner
var randomNumber=0



// DOCUMENT READY FUNCTION BELOW
$("button").click(function(){
    $("#userChoice").text($("#input").val());
});
$("button").click(function(){
    $("computerChoice").text($("#input").val());
});

$("#shoot").click(function(){
    var userChoice=$("#input").val();
    $('#userChoice').text(userChoice);
});
$("#shoot").click(function(){
    randomNumber=Math.random();
    alert(randomNumber);
    if(randomNumber > .33){ 
        $("#computerChoice").text("rock")
    }
    else if(randomNumber > .33){
        $("#computerChoice").text("paper")
    }
    else if(randomNumber > .33){
      $("#computerChoice").text("scissors")
    }
    



    

