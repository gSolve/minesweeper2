const Board = require('../src/board.js');

describe('Game board creation', () => {
  let board;
  beforeEach(() => {
    board = new Board();
  });

  test('should initialise an empty board that is 3x3', () => {
    expect(board.isEmpty()).toBe(true);
    expect(board.size.columns).toBe(3);
    expect(board.size.rows).toBe(3);
  });
});
