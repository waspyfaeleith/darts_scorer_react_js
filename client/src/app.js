var React = require('react');
var ReactDOM = require('react-dom');
var GameBox = require('./components/GameBox.jsx');
var Game = require('./classes/game');


window.onload = function(){
  var game = new Game();
  ReactDOM.render(
    <GameBox title="The Dart Scorer App" game={ game }></GameBox>,
    document.getElementById('app')
  );
}
