const Minesweeper = require('../src/minesweeper.js');

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

  test('should clean a square on the middle of the board and raise a free cell', () => {
    minesweeper = new Minesweeper([['💣', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']]);
    //     _Given_ a board 3x3 over a minefield 3x3 with a 💣 bomb in the top left
    // _when_ the user clean 🧹 the middle
    // _then_ the minesweeper raise a free ✅ cell!
    expect(minesweeper.clean(1, 1)).toBe(' ');
  });
});
