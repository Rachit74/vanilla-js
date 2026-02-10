'use strict';


const score0Element = document.getElementById('score--0');
const score1Element = document.getElementById("score--1");

const current0Element = document.getElementById("current--0");
const current1Element = document.getElementById("current--1");

const diceElement = document.querySelector(".dice");

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');

diceElement.classList.add('hidden');

score0Element.textContent = 0;
score1Element.textContent = 0;

const scores = [0, 0];

let currentScore = 0;
let activePlayer = 0;

const switchPlayer = function() {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0Element.classList.toggle('player--active');
    player1Element.classList.toggle('player--active');
}


btnRoll.addEventListener('click', function() {
    // generate a random dice roll
    const diceNumber = Math.trunc(Math.random() * 6) + 1;

    // display diceNumber
    diceElement.classList.remove('hidden');
    diceElement.src = `dice-${diceNumber}.png`;

    if (diceNumber !== 1) {
        currentScore += diceNumber;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
        switchPlayer(activePlayer, currentScore);
    }

})

btnHold.addEventListener('click', function() {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    switchPlayer(activePlayer, currentScore);

})