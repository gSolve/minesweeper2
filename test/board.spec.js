const Board = require('../src/board.js');

describe('Game board creation', () => {
  let board;
  beforeEach(() => {
    board = new Board();
  });

  test('should initialise an empty board', () => {
    expect(board.isEmpty()).toBe(true);
  });

  test('should initialise a board that is 3x3', () => {
    expect(board.size.columns).toBe(3);
    expect(board.size.rows).toBe(3);
  });

  test('should be printed on screen', () => {
    expect(board.print()).toEqual(
      `+-+-+-+
| | | |
+-+-+-+
| | | |
+-+-+-+
| | | |
+-+-+-+`,
    );
  });

  test('should position 0,0 give an empty field', () => {
    expect(board.getPosition(0, 0)).toBe(' ');
  });
});
