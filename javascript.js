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

function playOneRound (playerSelection, computerSelection) {
    /** 
     * The function plays a single round of Rock Paper Scissors. 
     * @param {string} playerSelection -
     * @param {string} computerSelection -
     * @returns {number} Return 1 if the player won, 0 if it's a tie and -1 if he lost
    */

    playerSelection = playerSelection.toLowerCase()
    if (playerSelection === computerSelection) {
        console.log("It's a tie");
        return 0;
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("You Lose! Paper beats Rock")
        return -1;
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log("You Lose! Scissors beats Paper")
        return -1;
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log("You Lose! Rock beats Scissors")
        return -1;
    }
    console.log("You Won!");
    return 1;
}

function isValidInput (playerSelection) {
    /** 
     * Check if the user given by the player is valid
     * @param {playerSelection} -
     * @returns {boolean} - True if Valid, False otherwise
    */

    playerSelection = playerSelection.toLowerCase()
    if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
        return true
    }
    return false
}

function playGame () {
    /** 
     * play a five round game that keeps score and reports a winner or loser at the end.
     * @param {none} -
     * @returns {none} -
    */

    let numberOfRounds = 0;
    let playerScore = 0;
    let computerScore = 0;
    let validInput = false;
    let computerSelection = getComputerChoice();
    let playerSelection = "";

    while (numberOfRounds < 5) {
        while (!validInput)  {
            playerSelection = prompt("Please choose Rock Paper or Scissors");
            validInput = isValidInput(playerSelection)
            if (!validInput) {
                console.log("Error the input is invalid, please try again")
            }
        }
        console.log(`Computer chose ${computerSelection}`)
        let result = playOneRound (playerSelection, computerSelection);
        switch (result){
            case 0:
                break;
            case 1:
                playerScore++;
                break;
            case -1:
                computerScore++;
                break;
        }
        numberOfRounds++;
        validInput = false;
        computerSelection = getComputerChoice();
    }
    if (computerScore > playerScore) {
        console.log(`The computer won at the end with a score of ${computerScore} whereas your score is ${playerScore}`)
    }
    else if (computerScore === playerScore) {
        console.log(`No one ones since both score are of ${computerScore}`)
    }
    else {
        console.log(`You won at the end with a score of ${playerScore} whereas the computer's score is ${computerScore}`)
    }
}

playGame()


