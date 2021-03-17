const Minesweeper = require('../src/minesweeper.js');
const Board = require('../src/board.js');

describe('Minesweeper creation', () => {
  let minesweeper;

  beforeEach(() => {
    minesweeper = new Minesweeper();
  });

  test('should initialise a minefield that is 3x3', () => {
    expect(minesweeper.minefield.size.columns).toBe(3);
    expect(minesweeper.minefield.size.rows).toBe(3);
  });

  test('should initialise a board that is 3x3', () => {
    expect(minesweeper.board.size.columns).toBe(3);
    expect(minesweeper.board.size.rows).toBe(3);
  });

  test('expect the board is overlapping the minefield', () => {
    minesweeper = new Minesweeper([[' ', ' ', ' '], [' ', '💣', ' '], [' ', ' ', ' ']]);
    expect(minesweeper.board.getPosition(0, 0)).toBe(' ');
    expect(minesweeper.minefield.getPosition(0, 0)).toBe(' ');
  });

  test('expect a bomb in the middle of the minefield', () => {
    minesweeper = new Minesweeper([[' ', ' ', ' '], [' ', '💣', ' '], [' ', ' ', ' ']]);
    expect(minesweeper.minefield.getPosition(1, 1)).toBe('💣');
  });
});

describe('Minesweeper cleans a square', () => {
  let minesweeper;

  test('should clean a square on the middle of the board and raise boom', () => {
    minesweeper = new Minesweeper([[' ', ' ', ' '], [' ', '💣', ' '], [' ', ' ', ' ']]);
    expect(minesweeper.clean(1, 1)).toBe('💥');
  });

  test('should clean a square on the bottom middle of the board and raise a free cell', () => {
    minesweeper = new Minesweeper([['💣', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']]);
    expect(minesweeper.clean(2, 1)).toBe(' ');
  });

  test('should clean a square on the middle of the board and raise a 1 in that position', () => {
    minesweeper = new Minesweeper([['💣', ' ', ' '], [' ', '1', ' '], [' ', ' ', ' ']]);
    expect(minesweeper.clean(1, 1)).toBe('1');
  });

  test('should clean a square on the middle of the board and raise a 3 in that position', () => {
    minesweeper = new Minesweeper([['💣', '💣', ' '], ['💣', '3', ' '], [' ', ' ', ' ']]);
    expect(minesweeper.clean(1, 1)).toBe('3');
  });
});

describe('The board is created and shown to the user', () => {
  let minesweeper;

  beforeEach(() => {
    minesweeper = new Minesweeper();
  });

  test('given a new game', () => {
    expect(minesweeper).toBeInstanceOf(Minesweeper);
  });

  test('A new board is created', () => {
    expect(minesweeper.board).toBeInstanceOf(Board);
  });

  test('all the cells showed to the user are empty', () => {
    expect(minesweeper.board.print()).toEqual('+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+');
  });
});
