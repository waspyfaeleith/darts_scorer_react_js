var Player = require('./player');
var Throw = require('./throw');

//var readlineSync = require('readline-sync');

var Game = function() {
  this.startScore = 501;
  var player1 = new Player();
  var player2 = new Player();
};

Game.prototype = {

  gameState: function () {
    var game = new Game();
    game.startScore = 501;
    game.player1 = this.player1;
    game.player2 = this.player2;
    game.winner = this.winner;
    game.thrower = this.thrower;

    return game;
  },

  changeThrower: function() {
    if (this.thrower == this.player1) {
      this.thrower = this.player2;
    } else {
      this.thrower = this.player1;
    }
  },

  getPlayer: function(playerNum) {
    //var name = readlineSync.question('Enter player ' + playerNum + ' name : ',
    //                  { hideEchoBack: false });
    console.log(name);
    return name;
  },

  setPlayer: function(playerNum, playerName) {
    //var name = readlineSync.question('Enter player ' + playerNum + ' name : ',
    //                  { hideEchoBack: false });
    //console.log(name);
    //return name;
    if (playerNum == 1) {
      this.player1 = new Player(playerName, this.startScore);
    } else if (playerNum == 2) {
      this.player2 = new Player(playerName, this.startScore);
    }
  },

  start: function() {
    var playerName = this.getPlayer(1);

    this.player1 = new Player(playerName, this.startScore);

    playerName = this.getPlayer(2);

    this.player2 = new Player(playerName, this.startScore);
    console.log(this.player1.name + ' vs ' + this.player2.name);
    this.thrower = this.player1;
  },

  getScore: function() {
    //var score = readlineSync.question(
    //  '\n\nEnter ' + this.thrower.name + '\'s score : ',
    //  { hideEchoBack: false });
    return score;
  },

  playerThrow: function(score) {
    var t = new Throw(parseInt(score));

    while (!t.isValid()) {
      score = this.getScore();
      t.score = parseInt(score);
    }
      
    this.thrower.throwDarts(t);
    console.log(this.thrower.name + ' has ' + this.thrower.currentScore);
    if (this.thrower.currentScore == 0) {
      this.winner = this.thrower;
    }
    this.changeThrower();
    console.log(this.thrower.name + " to throw");
    return this.gameState();
  },

  play: function() {
    this.start();
    do {
      this.getPlayerScore();
    } while (this.winner == null);

    console.log('\nGame shot, and the leg, to ' + this.winner.name);
  }
};

module.exports = Game;