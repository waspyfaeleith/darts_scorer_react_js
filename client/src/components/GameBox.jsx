var React = require('react');
var Game = require('../classes/game')
var Player = require('../classes/game')
var GameStartBox = require('./GameStartBox');
var PlayerScoreBox = require('./PlayerScoreBox');
var PlayerScoreForm = require('./PlayerScoreForm');

var GameBox = React.createClass({
  getInitialState: function() {
    var game = new Game();
    game.setPlayer(1,"Jack");
    game.setPlayer(2,"Victor");
    game.thrower = game.player1;
    return ({ game: game });
  },

  onSubmitScore: function(score)  {
    console.log("player threw " + score);
    var gameState = this.state.game.playerThrow(score);
    this.setState({game: gameState});
    //this.state.game.playerThrow(score);
  },

  handleStartGame: function(players) {
    console.log(players);
    console.log(players.player1);
    this.state.game.setPlayer(1,players.player1);
  },

  render: function() {
    return (
      <div className="scores">
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
        <div>
          <p>{this.state.game.thrower.name} to Throw</p>
          <PlayerScoreForm onSubmitScore={this.onSubmitScore}></PlayerScoreForm>
        </div>
      </div>
    );
  }
});

module.exports = GameBox;
