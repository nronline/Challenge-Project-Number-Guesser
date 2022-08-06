let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
// create a random number between 0 & 9
generateTarget = () => Math.floor(Math.random() * 9);


function compareGuesses (humanGuess, computerGuess, targetNumber) {
    //initialize variables
    const humanDiff = Math.abs(humanGuess - targetNumber);
    const computerDiff = Math.abs(computerGuess - targetNumber);

    // fire an alert if  the human guess is outside of acceptable range 1-9
    if (humanGuess < 1 || humanGuess > 9){
        alert ('Your number is out of range, please try again');
        currentRoundNumber--;
    }

    //check the humanDiff
    //console.log(humanDiff);
    //check the computer Diff
    //console.log(computerDiff);
    
    else if (humanDiff === computerDiff) {
        return 'Its a tie homie, you win';
    } else if (humanDiff > computerDiff) {
        return false;
    }
    else if (humanDiff < computerDiff){
        return true;
    }
}

//output should be false user should lose
//console.log(compareGuesses(2, 9, 9));

// output should be a draw
//console.log(compareGuesses(9, 9, 9));

//output should be true, user should win
//console.log(compareGuesses(8, 2, 9));

// check who the winner is and add to count
const updateScore = winner => {
  
  if (winner === 'human'){
    humanScore++;
    return humanScore;
    advanceRound();
  }
  else if (winner === 'computer'){
    computerScore++;
    return computerScore;
    advanceRound();
  }
  else{
    advanceRound();
  }

}

/** Testing update score 
console.log(updateScore('human'));
console.log(updateScore('human'));
console.log(updateScore('computer')); */

let advanceRound = () => currentRoundNumber++; 

/** Test round increment
console.log('round number' + advanceRound());
console.log('round number' + advanceRound());
console.log('round number' + advanceRound());
console.log('round number' + advanceRound()); */
