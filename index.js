//generating random number 1-6
var randomNumber1 = Math.floor(Math.random() * 6) + 1; 
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
//concactenating the dice image with the random number to select a random dice image
var image1 = "images/dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
var image2 = "images/dice" + randomNumber2 + ".png";
//changing the pre set dice image to the random dice image
document.querySelectorAll("img")[0].setAttribute("src",image1)
document.querySelectorAll("img")[1].setAttribute("src", image2);


//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
//If player 2 wins
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
//draw
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
