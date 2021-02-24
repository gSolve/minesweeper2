const Minefield = require('./minefield');
const Board = require('./board');

class Minesweeper {
  constructor(mines) {
    this.minefield = new Minefield(mines);
    this.board = new Board();
  }

  clean(row, column) {
    const cellResult = this.minefield.getPosition(row, column);
    return cellResult === '💣' ? '💥' : cellResult;
  }
}

module.exports = Minesweeper;
