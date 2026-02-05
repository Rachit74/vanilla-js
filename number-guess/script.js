'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
console.log(number);

let highScore = 0;

let score = 20;

function checkScore(score) {
    if (score === 0) {
        document.querySelector('.title').textContent = "GAME OVER!";
        document.querySelector('body').style.backgroundColor = 'Red';
        document.querySelector('.number').textContent = number;
    }
}

function checkHighScore(score, highScore) {
    if (score > highScore) {
        document.querySelector('.highscore').textContent = score;
    }
}

function handleWin() {
    document.querySelector('.message').textContent = '🎉 Correct Guess!';
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = 'Green';
    document.querySelector('.title').textContent = "YOU GOT IT!";
}

function handleLoss(number, guess) {
    if (guess > number) {
        document.querySelector('.message').textContent = '📈 Too High!';
        score --;
        document.querySelector('.score').textContent = score;
        checkScore(score);
    } else if (guess < number) {
        document.querySelector('.message').textContent = '📉 Too Low!';
        score --;
        document.querySelector('.score').textContent = score;
        checkScore(score);
    }
}

function getGuessValue() {
    const guess = Number(document.querySelector('.guess').value);
    // console.log(guess);

    if (!guess) {
        document.querySelector('.message').textContent = 'No Number :(';
    } else if (guess === number) {
        handleWin();

        checkHighScore(score, highScore);

        // update highScore to the current score
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;

    } else {
        handleLoss(number, guess);
    }
}


function resetGame() {
    console.log("GAME RESET!");
    // new random number
    number = Math.trunc(Math.random() * 20) + 1;
    console.log(number);

    // reset score
    score = 20;
    document.querySelector('.score').textContent = score;

    // reset message
    document.querySelector('.message').textContent = 'Start guessing...';

    // empty input
    document.querySelector('.guess').value = '';

    // reset background color
    document.querySelector('body').style.backgroundColor = '#222';

    // reset guess my number and game over
    document.querySelector('.title').textContent = 'Guess My Number!';
    document.querySelector('.number').textContent = '?';
}