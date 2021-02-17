class Minefield {
  constructor() {
    this.size = Object();
    this.size.rows = 3;
    this.size.columns = 3;
    this.numberOfMines = 1;
    this.mines = [[' ',' ',' '],[' ','💥',' '],[' ',' ',' ']];
  }

  getPosition(row, column) {
    return this.mines[row][column];
  }
}

module.exports = Minefield;
