'use strict';
const score_0EL = document.getElementById('score--0');
const score_1EL = document.getElementById('score--1');
const playerSc0 = document.getElementById('current--0');
const playerSc1 = document.getElementById('current--1');
const dice = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const player0 = document.getElementById('1');
const player1 = document.getElementById('2');

dice.classList.add('hidden');
score_0EL.textContent = 0;
score_1EL.textContent = 0;
///Game Logic
let currentScore = 0;

btnRoll.addEventListener('click', function () {
  const diceNumber = Math.trunc(Math.random() * 6) + 1;
  console.log(diceNumber);
  dice.classList.remove('hidden');
  dice.setAttribute('src', `dice-${diceNumber}.png`);
  if (diceNumber !== 1) {
    if (player0.classList.contains('player--active')) {
      currentScore += diceNumber;
      playerSc0.textContent = currentScore;
    } else {
      currentScore += diceNumber;
      playerSc1.textContent = currentScore;
    }
  } else {
    if (!player0.classList.contains('player--active')) {
      player1.classList.remove('player--active');
      player0.classList.add('player--active');
    } else {
      player1.classList.add('player--active');
      player0.classList.remove('player--active');
    }
  }
});
