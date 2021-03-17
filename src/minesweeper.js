const Minefield = require('./minefield');
const Board = require('./board');

class Minesweeper {
  constructor(mines) {
    this.minefield = new Minefield(mines);
    this.board = new Board();
  }

  clean(row, column) {
    const cellResult = this.minefield.getPosition(row, column);
    if (cellResult === ' ') {
      // const neighbouringBombCount = this.minefield.neighbouringBombCount();
    }
    return cellResult === '💣' ? '💥' : cellResult;
  }

  gameStatus() {
    return '';
  }
}

module.exports = Minesweeper;
