var Game = require('../src/classes/Game');
var Player = require('../src/classes/Player');
var assert = require('assert');

describe('Game', function() {
  it('Game is set', function() {

    var g = new Game(501);
    assert.equal(501, g.startScore);
  });
});
