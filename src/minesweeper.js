const Minefield = require('./minefield');
const Board = require('./board');

class Minesweeper {
  constructor(mines) {
    this.minefield = new Minefield(mines);
    this.board = new Board();
  }

  clean(row, column) {
    return this.minefield.getPosition(row, column);
  }
}

module.exports = Minesweeper;
