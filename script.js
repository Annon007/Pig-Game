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
let playing, currentScore, activePlayer, scores;
const init = function () {
  playing = true;
  ///Game Logic
  currentScore = 0;
  activePlayer = 0;
  scores = [0, 0];
  score_0EL.textContent = 0;
  score_1EL.textContent = 0;
  playerSc0.textContent = 0;
  playerSc1.textContent = 0;
  dice.classList.add('hidden');
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
};
init();
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};
btnRoll.addEventListener('click', function () {
  if (playing) {
    const diceNumber = Math.trunc(Math.random() * 6) + 1;
    console.log(diceNumber);
    dice.classList.remove('hidden');
    dice.setAttribute('src', `dice-${diceNumber}.png`);
    if (diceNumber !== 1) {
      // if (player0.classList.contains('player--active')) {
      //   currentScore += diceNumber;
      //   playerSc0.textContent = currentScore;
      // } else {
      //   playerSc0.textContent == 0;

      //   currentScore += diceNumber;
      //   playerSc1.textContent = currentScore;
      // }
      currentScore += diceNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // if (!player0.classList.contains('player--active')) {
      //   player1.classList.remove('player--active');
      //   player0.classList.add('player--active');
      // } else {
      //   player1.classList.add('player--active');
      //   player0.classList.remove('player--active');
      // }
      switchPlayer();
    }
  }
});
btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 20) {
      dice.classList.add('hidden');
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});
btnNew.addEventListener('click', init);
