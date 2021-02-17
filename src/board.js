class Board {
  constructor() {
    this.size = Object();
    this.size.rows = 3;
    this.size.columns = 3;
    this.mines = [[' ',' ',' '],[' ','X',' '],[' ',' ',' ']];
  }

  isEmpty() {
    return true;
  }

  print() {
    return `+-+-+-+
| | | |
+-+-+-+
| | | |
+-+-+-+
| | | |
+-+-+-+`;
  }

  getPosition() {
    return ' ';
  }
}
module.exports = Board;
