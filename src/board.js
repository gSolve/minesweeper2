class Board {
  constructor() {
    this.size = Object();
    this.size.rows = 3;
    this.size.columns = 3;
  }

  isEmpty() {
    return true;
  }
}
module.exports = Board;
