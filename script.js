'use strict';

// selectors
const container = document.querySelector('.container');
const message = document.querySelector('.message');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const allButtons = document.querySelectorAll('.btn');

const overlay = document.querySelector('.overlay');
const playerDisplay = document.querySelector('.div--player');
const computerDisplay = document.querySelector('.div--computer');

const choice = ['rock', 'paper', 'scissors'];

// global variables
let playerScore = 0;
let computerScore = 0;

let playerChoice;
let computerChoice;

// functions
const computerPlay = function () {
  return choice[Math.floor(Math.random() * choice.length)];
};

const playRound = function (playerSelection, computerSelection) {
  // test for draw
  if (
    (playerSelection === 'rock' && computerSelection === 'rock') ||
    (playerSelection === 'paper' && computerSelection === 'paper') ||
    (playerSelection === 'scissors' && computerSelection === 'scissors')
  )
    message.textContent = 'DRAW';
  // test for player win
  else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    playerScore++;
    message.textContent = 'PLAYER WINS';

    // test for computer win
  } else if (
    (playerSelection === 'rock' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'rock')
  ) {
    computerScore++;
    message.textContent = 'COMPUTER WINS';
  }
};

/* Create three buttons, one for each selection. Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)
Add a div for displaying results and change all of your console.logs into DOM methods.
Display the running score, and announce a winner of the game once one player reaches 5 points. */

// select button elements

// run add event listener on a div
container.addEventListener('click', function (e) {
  if (e.target.classList.contains('btn')) {
    const clicked = e.target.dataset.choice;
    playRound(clicked, computerPlay());
  }

  // player wins
  if (computerScore === 5) {
    message.textContent = 'COMPUTER WINS THE GAME';
    computerDisplay.classList.add('winner');
    overlay.classList.remove('hidden');

    // computer wins
  } else if (playerScore === 5) {
    message.textContent = 'YOU WIN THE GAME';
    playerDisplay.classList.add('winner');
    overlay.classList.remove('hidden');
  }
});

// take e.target attribute

// run playRound with (clicked, computer)

// 1. add event listeners to buttons.

// when button clicked, playRound

// selection from round

/*
const game = function () {
  for (let i = 0; i < 5; i++) {
    computerChoice = computerPlay();
    playerChoice = prompt(
      'Choose your destiny! Rock, Paper or Scissors?'
    ).toLowerCase();
    playRound(playerChoice, computerChoice);
  }

  if (computerScore > playerScore)
    console.log('Computer is the winner of the game');
  else if (playerScore > computerScore)
    console.log('Player is the winner of the game!');
  else console.log("It's a draw! We have no winner!");
};

game();
*/
