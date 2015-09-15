
function guessingGame() {
	var gameOver = false;
	var guesses = [];
	var random = Math.floor((Math.random() * 100) +1);
	alert(random);

	do {
		var theNumber = prompt("Guess a number between 1-100", "");
		if (!isNaN(theNumber) && theNumber != null) {
			// Check if user's guess is already in the array
			if (guesses.indexOf(theNumber) != -1) {
				alert("You've already guessed that number. Guess again!");
			} else {
				// If the user's guess is unique and is a number and user didn't hit Cancel button

				// Add user's guess to the array
				guesses.push(theNumber);
				if (theNumber == random) {
					// If user happens to get the number in 1 try, changes "tries" to "try"
					if (guesses.length == 1) {
						alert("Unbelievable! You guessed correctly in only 1 try!");
					} else {
						alert("Amazing! You guessed correctly in only " + guesses.length + " tries.");
					}
					gameOver = true;
				} else if (theNumber > random) {
					alert("You guessed too high. Guess again!");
				} else {
					alert("You guessed too low. Guess again!");
				}
			}
		} else if (theNumber != null) {
			// If user input is non-numeric
			alert("Nice try, buster. Please enter an actual number!");
		} else {
			// If user hits Cancel button
			gameOver = true;
			alert("Game over. Better luck next time!")
		}
	} while (gameOver == false);
}

guessingGame();
