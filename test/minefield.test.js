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
    minefield = new Minefield([[' ', ' ', ' '], [' ', '💣', ' '], [' ', ' ', ' ']]);
    expect(minefield.getPosition(0, 0)).toBe(' ');
  });

  test('should have a bomb in the top left corner', () => {
    minefield = new Minefield([['💣', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']]);
    expect(minefield.getPosition(0, 0)).toBe('💣');
  });
});

describe('Given a minefield', () => {
  let minefield;
  beforeEach(() => {
    minefield = new Minefield();
  });
  test('should return one neighbour bomb', () => {
    minefield.mines = [['💣', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
    expect(minefield.getNeighbouringBombCount(1, 1)).toBe(1);
  });

  test('should return three neighbour bombs', () => {
    minefield.mines = [['💣', '💣', ' '], ['💣', ' ', ' '], [' ', ' ', ' ']];
    expect(minefield.getNeighbouringBombCount(1, 1)).toBe(3);
  });

  test('should return 8 neighbour bombs', () => {
    minefield.mines = [['💣', '💣', '💣'], ['💣', ' ', '💣'], ['💣', '💣', '💣']];
    expect(minefield.getNeighbouringBombCount(1, 1)).toBe(8);
  });
});
