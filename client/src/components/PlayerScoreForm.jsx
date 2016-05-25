var React = require('react');

var PlayerScoreForm = React.createClass({
  getInitialState: function() {
    return {score: ''};
  },

  handleScoreChange: function(e) {
    this.setState({score: e.target.value});
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var score = this.state.score;
    console.log("player scored " + score);
    this.props.onSubmitScore(score);
  }, 
  
  render: function() {
    return (
      <form className="playerScoreForm" onSubmit={this.handleSubmit}>
        <input type="text" placeholder=" Enter Score" className="txtScore" onChange={this.handleScoreChange}/>
        <input type="submit" className="btnSubmit" value="Enter"/>
      </form>
    );
  }
});

module.exports = PlayerScoreForm;