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
});

describe('Minesweeper cleans a square', () => {
	let minesweeper;

  beforeEach(() => {
		minesweeper = new Minesweeper();
  });

	test('should clean a square on the middle of the board and raise boom', () => {
		expect(minesweeper.clean(1, 1)).toBe('💥');
	});
});