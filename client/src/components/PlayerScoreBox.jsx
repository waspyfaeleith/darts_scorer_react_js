var React = require('react');
var PlayerScoreForm = require('./PlayerScoreForm');

var PlayerScoreBox = React.createClass({

  render: function() {
    var scores = this.props.player.scores.map(function (score, index) {
              return <li className="strikeThrough" key={index}>{score}</li>;
          });
    scores.pop(); //the last one is the current score so we don't want it struck through
    if (this.props.player.currentScore == 0) {
      scores.push(<li> Game Shot! </li>);
    } else {
      scores.push(<li> { this.props.player.currentScore } </li>);
    }
    return (
      <div className="playerScoreBox">
        <ul>
          { scores }
        </ul>       
      </div>
    );
  }
});

module.exports = PlayerScoreBox;