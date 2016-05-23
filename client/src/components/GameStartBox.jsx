var React = require('react');

var GameStartBox = React.createClass({
  getInitialState: function() {
      return {player1: 'Player 1', player2: 'Player 2'};
  },
  handlePlayer1Change: function(e) {
    this.setState({player1: e.target.value});
  },
  handlePlayer2Change: function(e) {
    this.setState({player2: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var player1 = this.state.player1;
    var player2 = this.state.player2;

    var players = {player1: player1, player2: player2};
    this.props.onStartGame(players);

    //this.setState({player1: 'Player 1', player2: 'Player 2'});
  },
  render: function() {
    return (
      <div className="gameBox">
        Let's play darts.
        <form className="playerForm" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Player 1" 
            value={this.state.player1}
            onChange={this.handlePlayer1Change}/>
          <input type="text" placeholder="Player 2" 
            value={this.state.player2}
            onChange={this.handlePlayer2Change}/>
          <input type="submit" value="Start Game" />
        </form>
      </div>
    );
  }
});

module.exports = GameStartBox;
