// Generate random number player 1
let randNum1 = Math.floor(Math.random() * 6) + 1;

// Generate dice image based on randNum1
var randDiceImg1 = `dice${randNum1}.png`;

// Set random image source path based on randDiceImg1
const randomImgSource1 = `./images/${randDiceImg1}`;

let img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", randomImgSource1);

// Generate random number player 2
let randNum2 = Math.floor(Math.random() * 6) + 1;

// Generate dice image based on randNum2
var randDiceImg2 = `dice${randNum2}.png`;

// Set random image source path based on randDiceImg2
const randomImgSource2 = `./images/${randDiceImg2}`;

let img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src", randomImgSource2);

if (randNum1 > randNum2) {
  document.querySelector("h1").innerHTML = "Player 1 Win";
} else if (randNum1 < randNum2) {
  document.querySelector("h1").innerHTML = "Player 2 Win";
} else {
  document.querySelector("h1").innerHTML = "Draww✨";
}
