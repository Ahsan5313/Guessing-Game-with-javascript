
var numOfWon = 0;
var numOfLost = 0;
for (x=1; x<=5; x++){
    
    var gusseNumber = parseInt(prompt("Enter a number from 1 to 5 :"));

var randomNumber = Math.floor(Math.random()*5)+1;


if(gusseNumber == randomNumber){
     document.write("You have won " +"<br/>");
     numOfWon++;
}
else{
    document.write("You have lost ! random number was " + randomNumber+"<br/>");
    numOfLost++;
}


}
document.write(" Number of won ="+numOfWon+"<br/>");
document.write("Number of lost ="+numOfLost);