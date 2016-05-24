var React = require('react');
var Game = require('../classes/game')
var Player = require('../classes/game')
var GameStartBox = require('./GameStartBox');
var PlayerScoreBox = require('./PlayerScoreBox');
var PlayerScoreForm = require('./PlayerScoreForm');

var GameBox = React.createClass({
  getInitialState: function() {
    var game = new Game();
    return ({ game: game });
  },

  onStartGame: function(players) {
    var gameState = this.state.game.setPlayers(players.player1, players.player2);
    this.setState({game: gameState});
  },

  onSubmitScore: function(score)  {
    //console.log("player threw " + score);
    var gameState = this.state.game.playerThrow(score);
    this.setState({game: gameState});
  },

  handleStartGame: function(players) {
    this.state.game.setPlayer(1,players.player1);
  },

  render: function() {
    if (( this.state.game.player1== null) || (this.state.game.player2 == null))
    {
      return (
        <div>
          <GameStartBox onStartGame={ this.onStartGame }></GameStartBox>
        </div>
      );
    } else {
    var header;
     if (this.state.game.winner != null) {
        header = <span>Game shot, and the leg, to {this.state.game.winner.name}</span>
     } else if (this.state.game.thrower.isOnAFinish()) {
        header = <span> {this.state.game.thrower.name}, you require { this.state.game.thrower.currentScore}
        <PlayerScoreForm onSubmitScore={this.onSubmitScore}></PlayerScoreForm></span>;
     } else {
      header = <span> {this.state.game.thrower.name} to Throw 
      <PlayerScoreForm onSubmitScore={this.onSubmitScore}></PlayerScoreForm></span>;
    }
      return (
        <div className="scores">
        <div>
          { header }
        </div>
          <div className="scoreHeader">
            <label id="lblStartScore">501</label>
          </div>
          <table className="scoreTable">
            <thead>
              <tr className="trPlayerHeader">
                <td className="thPlayer1Name">
                  <label className="currentScore scoreboardItem" id="lblPlayer1Name">{this.state.game.player1.name}</label>
                </td>
                <td className="thPlayer2Name">
                  <label className="currentScore scoreboardItem" id="lblPlayer2Name">{this.state.game.player2.name}</label>
                </td>
              </tr>
            </thead>
            <tbody>
             <tr className="trScores">
               <td className="thScore thPlayerScore">
                 <PlayerScoreBox player={this.state.game.player1}></PlayerScoreBox>
               </td>
               <td className="thPlayerScore">
                 <PlayerScoreBox player={this.state.game.player2}></PlayerScoreBox>
               </td>
             </tr>
            </tbody>
          </table>
        </div>
      );
    }
  }
});

module.exports = GameBox;
