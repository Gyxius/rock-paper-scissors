const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const bottomMessage = document.querySelector(".bottom-message");
const computerMessage = document.querySelector(".computer-message");
const myScore = document.querySelector("#myScore");
const pcScore = document.querySelector("#computerScore");
const rounds = document.querySelector("#rounds");

function getComputerChoice () {
    /** 
     * The function will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.  
     * It is used in the game to make the computer play.
     * @param {none}  -
     * @returns {string} Rock, Paper or Scissors
    */
    let rock = "rock";
    let paper = "paper";
    let scissors = "scissors";
    const arrayChoices = [rock, paper, scissors];   
    const randomChoice = arrayChoices[Math.floor(Math.random() * arrayChoices.length)];
    return randomChoice;
}

function playOneRound (playerSelection) {
    /** 
     * The function plays a single round of Rock Paper Scissors. 
     * @param {string} playerSelection -
     * @returns {number} Return 1 if the player won, 0 if it's a tie and -1 if he lost
    */

    let computerSelection;
    computerSelection = getComputerChoice ()
    computerMessage.textContent = `Computer chose ${computerSelection}`;

    playerSelection = playerSelection.toLowerCase()
    if (playerSelection === computerSelection) {
        bottomMessage.textContent = "It's a tie";

        return 0;
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        bottomMessage.textContent = "You Lose! Paper beats Rock";
        return -1;
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        bottomMessage.textContent = "You Lose! Scissors beats Paper";
        return -1;
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        bottomMessage.textContent = "You Lose! Rock beats Scissors";
        return -1;
    }
    bottomMessage.textContent = "You Won!";
    return 1;
}

function playGame () {
    /** 
     * play a five round game that keeps score and reports a winner or loser at the end.
     * @param {none} -
     * @returns {none} -
    */

    let numberOfRounds = 5;
    let playerScore = 0;
    let computerScore = 0;

    rockButton.addEventListener("click", (e) => {
        update(playOneRound ("rock"));
    });

    paperButton.addEventListener("click", () => {
        update(playOneRound ("paper"));
    });
    scissorsButton.addEventListener("click", () => {
        update(playOneRound ("scissors"));
    });

    function update(result) {
        /** 
         * Update all the scores, the round number and log the actions
         * @param {result} integer - 1 if the player won, 0 if it's a tie and -1 if he lost
         * @returns {none} - 
        */
        switch (result){
            case 0:
                playerScore++;
                computerScore++;
                break;
            case 1:
                playerScore++;
                break;
            case -1:
                computerScore++;
                break;
        }

        numberOfRounds--;
        if(numberOfRounds <= 0) {
            if (computerScore > playerScore) {
                bottomMessage.textContent = `The computer won at the end with a score of ${computerScore} whereas your score is ${playerScore}`; 
                rounds.textContent = `You lost`; 
            }
            else if (computerScore === playerScore) {
                bottomMessage.textContent = `No one won since both score are of ${computerScore}`;  
                rounds.textContent = `Tie`; 
            }
            else {
                bottomMessage.textContent = `You won at the end with a score of ${playerScore} whereas the computer's score is ${computerScore}`; 
                rounds.textContent = `You won`; 
            }
            numberOfRounds = 5;
            playerScore = 0;
            computerScore = 0;

        }
        else {
            myScore.textContent = `Your score: ${playerScore}`;
            pcScore.textContent = `Computer score: ${computerScore}`;
            rounds.textContent = `Rounds: ${numberOfRounds}`;
        }

    }

}

playGame()





