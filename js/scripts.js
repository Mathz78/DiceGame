document.getElementById("tie").style.display = "none";

function playButton () {
    document.querySelector("button").innerHTML = "Play again ?"

    // Create a random number between 1 and 6.
    var playerOne = Math.floor(Math.random() * 6 + 1);
    var playerTwo = Math.floor(Math.random() * 6 + 1);

    // Change the image of the dices.
    document.getElementById("playerOne").src = `images/dice${playerOne}.png`;
    document.getElementById("playerTwo").src = `images/dice${playerTwo}.png`;

    // Show the winner
    if (playerOne > playerTwo) {
        document.getElementById("playerOneH2").innerHTML = "Player One (WIN!!!)";
        document.getElementById("playerTwoH2").innerHTML = "Player Two";
        document.getElementById("tie").style.display = "none";
    } else if (playerTwo > playerOne) {
        document.getElementById("playerTwoH2").innerHTML = "Player Two (WIN!!!)";
        document.getElementById("playerOneH2").innerHTML = "Player One";
        document.getElementById("tie").style.display = "none";
    } else {
        document.getElementById("playerTwoH2").innerHTML = "Player Two";
        document.getElementById("playerOneH2").innerHTML = "Player One";
        document.getElementById("tie").style.display = "block";
    }
}