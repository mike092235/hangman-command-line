//`main.js` will contain the logic of your app. Running it in Terminal/Bash will start the game.
var Word = require('./word.js');
var prompt = require('prompt');

console.log("Welcome to Hangman!");
console.log("Can you guess the programming language?");
console.log("------------------------------------------");
prompt.start();

game = {
  wordBank: ['ruby'. 'python', 'java', 'php', 'perl', 'javascript', 'haskell', 'scala', 'bash'];
  wordsWon: 0,
  guessesRemaining: 10,
  currrentWrd: null,

  startGame: function (wrd) {
    this.resetGuesses();
    this.currentWrd = new Word(this.wordBank[Math.floor(Math.random()*this.wordBank.length)]);
    this.currentWrd.getLet();
    this.promptUser();
  },

  resetGueses: function(){
    this.guessesRemaining = 10;
  },

