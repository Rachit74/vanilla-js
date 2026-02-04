'use strict';

const number = Math.trunc(Math.random() * 20) + 1;
console.log(number);

let score = 20;

function checkScore(score) {
    if (score === 0) {
        document.querySelector('.title').textContent = "GAME OVER!";
        document.querySelector('body').style.backgroundColor = 'Red';
        document.querySelector('.number').textContent = number;
    }
}

function getGuessValue() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    if (!guess) {
        document.querySelector('.message').textContent = 'No Number :(';
    } else if (guess === number) {
        document.querySelector('.message').textContent = '🎉 Correct Guess!';
        document.querySelector('.number').textContent = number;
        document.querySelector('body').style.backgroundColor = 'Green';
        document.querySelector('.title').textContent = "YOU GOT IT!";
    } else if (guess > number) {
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


