var randomNumber1;
randomNumber1=Math.floor((Math.random()*6))+1;
var randomDice1="images/dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src",randomDice1);





var randomNumber2;
randomNumber2=Math.floor((Math.random()*6))+1;
var randomDice2="images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",randomDice2);





if(randomNumber2===randomNumber1)
document.querySelector("h1").innerHTML="Draw !";
else if(randomNumber2>randomNumber1)
document.querySelector("h1").innerHTML="Player 2 Wins !|>";
else if(randomNumber2<randomNumber1)
document.querySelector("h1").innerHTML="<|Player 1 Wins !";