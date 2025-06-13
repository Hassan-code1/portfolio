let chancesLeft = 5;
let generatedNum;
let result = 0;

function generateNumber() {
    generatedNum = Math.floor(Math.random() * 10) + 1; // Generates 1 to 10
    console.log(`Generated num is ${generatedNum}`);
    chancesLeft = 5;
    document.querySelector("#numChancesLeft").textContent = chancesLeft;
    document.querySelector("#result").textContent = "";
    document.querySelector("#guessedNumber").value = "";
}

function checkGuessedNum() {
    let guessedNum = parseInt(document.querySelector("#guessedNumber").value);
    document.querySelector("#numChancesLeft").textContent = chancesLeft;

    if (guessedNum === generatedNum) {
        document.querySelector("#result").textContent = "🎉 Congrats! You guessed the correct number!";
    } else {
        chancesLeft -= 1;
        if(chancesLeft < 0){
            document.querySelector("#result").textContent = "💥 Sorry, you lost. Click 'Generate number' to play again.";
            document.querySelector("#numChancesLeft").textContent = 0;
            alert("You Loose the Game please click 'Generate Number to play again'");
            return;
        }
        if (chancesLeft >= 1) {
            document.querySelector("#result").textContent = "❌ Wrong guess. Try again!";
        } else {
            document.querySelector("#result").textContent = "💥 Sorry, you lost. Click 'Generate number' to play again.";
        }

        document.querySelector("#numChancesLeft").textContent = chancesLeft;
    }
}
