var React = require('react');
var PlayerScoreForm = require('./PlayerScoreForm');

var PlayerScoreBox = React.createClass({

  render: function() {
    this.props.player.scores.pop;//the last one is the current score
    var scores = this.props.player.scores.map(function (score, index) {
              return <li className="strikeThrough" key={index}>{score}</li>;
          });
    return (
      <div className="playerScoreBox">
        <ul>
          { scores } 
        </ul>
        { this.props.player.currentScore }
      </div>
    );
  }
});

module.exports = PlayerScoreBox;