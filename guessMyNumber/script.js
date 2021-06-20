'use strict';

let myNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let hightScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // when there is now input
  if (!guess) {
    displayMessage('No number!');

    // the right guess
  } else if (guess === myNumber) {
    displayMessage('Correct number!');
    document.querySelector('.number').textContent = myNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > hightScore) {
      hightScore = score;
      document.querySelector('.highscore').textContent = hightScore;
    }

    // when score 0 is reached
  } else if (score === 0) {
    displayMessage('You lost!');

    // when guess is too low or too high
  } else if (guess != myNumber) {
    displayMessage(guess < myNumber ? 'Too low!' : 'Two high!');
    score--;
    document.querySelector('.score').textContent = score;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  myNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
});
