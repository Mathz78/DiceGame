document.getElementById("tie").style.display = "none";

function playButton () {
    document.querySelector("button").innerHTML = "Play again ?"

    var playerOne = 0;
    var playerTwo = 0;

    // Create a random number between 1 and 6.
    playerOne = Math.random() * 6 + 1;
    playerOne = Math.floor(playerOne);
    playerTwo = Math.random() * 6 + 1;
    playerTwo = Math.floor(playerTwo);

    console.log(playerOne, playerTwo);

    // Verify Winner
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