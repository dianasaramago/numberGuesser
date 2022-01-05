let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
    let number = Math.floor(Math.random() * 10);
    return number;
};

const getAbsoluteDistance = (guessNumber, targetNumber) => {
    let distance = Math.abs(targetNumber - guessNumber);
    return distance;
};

const compareGuesses = (userGuess, computerGuess, targetNumber) => {
    if (userGuess < 0 || userGuess > 9) {
        alert('This number is out of range!')
    } else {
        let resultUser = getAbsoluteDistance(userGuess, targetNumber);
        let resultComputer = getAbsoluteDistance(computerGuess, targetNumber);
        if (resultUser == resultComputer) {
            return true;
        }
        if (resultUser < resultComputer) {
            return true;
        } else if (resultComputer < resultUser) {
            return false;
        }
    }
};

const updateScore = winner => {
    switch (winner) {
        case 'human':
            humanScore += 1;
            break;
        case 'computer':
            computerScore += 1;
            break;
    };
};

const advanceRound = () => {
    currentRoundNumber += 1;
};
