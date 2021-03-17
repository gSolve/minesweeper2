class Board {
  constructor() {
    this.size = Object();
    this.size.rows = 3;
    this.size.columns = 3;
    this.board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
  }

  print() {
    const topRow = `+-+-+-+\n|${this.board[0][0]}|${this.board[0][1]}|${this.board[0][2]}|\n`;
    const middleRow = `+-+-+-+\n|${this.board[1][0]}|${this.board[1][1]}|${this.board[1][2]}|\n`;
    const bottomRow = `+-+-+-+\n|${this.board[2][0]}|${this.board[2][1]}|${this.board[2][2]}|\n+-+-+-+`;
    return `${topRow}${middleRow}${bottomRow}`;
  }

  getPosition() {
    return ' ';
  }
}
module.exports = Board;
