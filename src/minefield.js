class Minefield {
  constructor() {
    this.size = Object();
    this.size.rows = 3;
    this.size.columns = 3;
    this.numberOfMines = 1;
  }

  getPosition() {
    return ' ';
  }
}

module.exports = Minefield;
