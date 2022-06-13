let randomNumber1 = Math.random();
randomNumber1 = Math.ceil(randomNumber1 * 6);
let randomNumber2 = Math.random();
randomNumber2 = Math.ceil(randomNumber2 * 6);

let randomimg1Add = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomimg1Add);
let randomimg2Add = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomimg2Add);
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins"
}
else if (randomNumber1 == randomNumber2) {
    document.querySelector("h1").innerHTML = "It's a Draw"
}
else {
    document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
}