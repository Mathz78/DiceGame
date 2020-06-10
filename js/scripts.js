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
    if (playerOne === 1) {
        document.getElementById("playerOne").src = "images/dice1.png";
    } else if (playerOne === 2) {
        document.getElementById("playerOne").src = "images/dice2.png";
    } else if (playerOne === 3) {
        document.getElementById("playerOne").src = "images/dice3.png";
    } else if (playerOne === 4) {
        document.getElementById("playerOne").src = "images/dice4.png";
    } else if (playerOne === 5) {
        document.getElementById("playerOne").src = "images/dice5.png";
    } else if (playerOne === 6) {
        document.getElementById("playerOne").src = "images/dice6.png";
    }

    if (playerTwo === 1) {
        document.getElementById("playerTwo").src = "images/dice1.png";
    } else if (playerTwo === 2) {
        document.getElementById("playerTwo").src = "images/dice2.png";
    } else if (playerTwo === 3) {
        document.getElementById("playerTwo").src = "images/dice3.png";
    } else if (playerTwo === 4) {
        document.getElementById("playerTwo").src = "images/dice4.png";
    } else if (playerTwo === 5) {
        document.getElementById("playerTwo").src = "images/dice5.png";
    } else if (playerTwo === 6) {
        document.getElementById("playerTwo").src = "images/dice6.png";
    }

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