class Minefield {
  constructor(mines) {
    this.size = Object();
    this.size.rows = 3;
    this.size.columns = 3;
    this.numberOfMines = 1;
    this.mines = mines;
  }

  getPosition(row, column) {
    if (row < 0 || column < 0) {
      return null;
    }
    if (row > this.size.rows - 1 || column > this.size.columns - 1) {
      return null;
    }
    return this.mines[row][column];
  }

  getNeighbouringBombCount(row, column) {
    let numberOfNeighbouringBombs = 0;

    // up-left
    if (this.getPosition(row - 1, column - 1) === '💣') {
      numberOfNeighbouringBombs += 1;
    }

    // up-middle
    if (this.getPosition(row - 1, column) === '💣') {
      numberOfNeighbouringBombs += 1;
    }

    // up-right
    if (this.getPosition(row - 1, column + 1) === '💣') {
      numberOfNeighbouringBombs += 1;
    }

    // left
    if (this.getPosition(row, column - 1) === '💣') {
      numberOfNeighbouringBombs += 1;
    }

    // right
    if (this.getPosition(row, column + 1) === '💣') {
      numberOfNeighbouringBombs += 1;
    }

    // down-left
    if (this.getPosition(row + 1, column - 1) === '💣') {
      numberOfNeighbouringBombs += 1;
    }

    // down-middle
    if (this.getPosition(row + 1, column) === '💣') {
      numberOfNeighbouringBombs += 1;
    }

    // down-right
    if (this.getPosition(row + 1, column + 1) === '💣') {
      numberOfNeighbouringBombs += 1;
    }

    return numberOfNeighbouringBombs === 0 ? ' ' : numberOfNeighbouringBombs;
  }
}

module.exports = Minefield;
