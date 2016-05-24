var React = require('react');
var PlayerScoreForm = require('./PlayerScoreForm');

var PlayerScoreBox = React.createClass({

  render: function() {
    var scores = this.props.player.scores.map(function (score, index) {
              return <li className="strikeThrough" key={index}>{score}</li>;
          });
    scores.pop(); //the last one is the current score so we don't want it struck through
    return (
      <div className="playerScoreBox">
        <ul>
          { scores }
          <li> { this.props.player.currentScore } </li>
        </ul>       
      </div>
    );
  }
});

module.exports = PlayerScoreBox;