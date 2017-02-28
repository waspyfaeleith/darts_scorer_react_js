var React = require('react');

var GameStartBox = React.createClass({
  getInitialState: function() {
      return {player1: '', player2: '', startScore: 501};
  },

  handlePlayer1Change: function(e) {
    this.setState({player1: e.target.value});
  },

  handlePlayer2Change: function(e) {
    this.setState({player2: e.target.value});
  },

  onStartScoreChanged: function(e) {
    this.setState({startScore: e.target.value});
    console.log(e.target.value);
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var player1 = this.state.player1;
    var player2 = this.state.player2;
    var startScore = this.state.startScore;

    var gameInfo = {player1: player1, player2: player2, startScore: startScore};
    console.log("gameInfo:", gameInfo);
    this.props.onStartGame(gameInfo);
  },

  render: function() {
    var startScoreOptions = <span className="radioList">
      <label>Start Score: </label>
      301 <input type="radio" name="startScore" value="301" onChange={this.onStartScoreChanged} />
      501 <input type="radio" name="startScore" value="501" onChange={this.onStartScoreChanged} defaultChecked="checked"/>
      701 <input type="radio" name="startScore" value="701" onChange={this.onStartScoreChanged}/>
      1001 <input type="radio" name="startScore" value="1001" onChange={this.onStartScoreChanged}/>
    </span>;

    var soundEffectOptions = <span className="radioList">
      <label>Sound Effects: </label>
        Off <input type="radio" name="sounds" value="off" defaultChecked="checked"/>
        On <input type="radio" name="sounds" value="on"/>
    </span>;

    return (
      <div className="gameBox introBlurb playerInfo">
        <p>Welcome to our simple dart scorer app</p>
        <p>Enter the names of each player/team</p>

        <form className="playerForm" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Player 1" 
            value={this.state.player1}
            onChange={this.handlePlayer1Change}/>
          <input type="text" placeholder="Player 2" 
            value={this.state.player2}
            onChange={this.handlePlayer2Change}/>

           <p>{ startScoreOptions }</p>
           <p>{ soundEffectOptions }</p>
            
          <input type="submit" className="btnSubmit" value="Start Game"/>
        </form>
      </div>
    );
  }
});

module.exports = GameStartBox;
