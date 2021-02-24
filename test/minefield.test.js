const Minefield = require('../src/minefield.js');
const Board = require('../src/board.js');

describe('Minefield creation', () => {
  let minefield;

  beforeEach(() => {
    minefield = new Minefield();
  });

  test('should initialise a minefield that is 3x3', () => {
    expect(minefield.size.columns).toBe(3);
    expect(minefield.size.rows).toBe(3);
  });

  test('should contain one mine', () => {
    expect(minefield.numberOfMines).toBe(1);
  });

  test('should position 0,0 give an empty field', () => {
    minefield = new Minefield([[' ', ' ', ' '], [' ', '💥', ' '], [' ', ' ', ' ']]);
    expect(minefield.getPosition(0, 0)).toBe(' ');
  });

  test('should have a bomb in the top left corner', () => {
    minefield = new Minefield([['💥', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']]);
    expect(minefield.getPosition(0, 0)).toBe('💥');
  });
});

describe('Minefield and board integration', () => {
  let board;
  let minefield;
  beforeEach(() => {
    board = new Board();
    minefield = new Minefield([[' ', ' ', ' '], [' ', '💥', ' '], [' ', ' ', ' ']]);
  });

  it('Given a board ?3x3?', () => {
    expect(board).toBeInstanceOf(Board);
    expect(board.size.columns).toBe(3);
    expect(board.size.rows).toBe(3);
  });

  it('given a minefield ?3x3?', () => {
    expect(minefield).toBeInstanceOf(Minefield);
    expect(minefield.size.columns).toBe(3);
    expect(minefield.size.rows).toBe(3);
  });

  it('expect the board is overlapping the minefield', () => {
    expect(board.getPosition(0, 0)).toBe(' ');
    expect(minefield.getPosition(0, 0)).toBe(' ');
  });

  it('expect a bomb in the middle of the minefield', () => {
    // _Given_ a board 3x3 over a minefield 3x3 with a 💣 bomb in the middle
    expect(minefield.getPosition(1, 1)).toBe('💥');
  });
});
