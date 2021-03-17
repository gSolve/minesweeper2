# templateRepository


## ✅ US 1 -- Board creation
*As a* user 
*I want* to have a board 
*so that* I'd be able to play minesweeper.

**UAT 1:**
_Given_ a minesweeper game
_when_ the user starts it
_then_ an empty board 3x3 is created.


---
## ✅ US 2 -- clean a cell nd find what is inside
*As a* user 
*I want* to clean a cell
*so that* I'd discover if there's a bomb or a free cell.

**UAT 2:**
_Given_ a minesweeper game
_when_ the user starts it
_then_ a minefield with one 💣 bomb is created.

---
## ✅ US 3 - Integrate Board & Minefield
*As a* user 
*I want* to clean a cell
*so that* I'd discover if there's a bomb or a free cell.

**UAT 1:** ✅
_Given_ a board 3x3 over a minefield 3x3 with a 💣 bomb in the middle
_when_ the user clean 🧹 the middle
_then_ the minesweeper raise a 💥 boom!

**UAT 2:** ✅
_Given_ a board 3x3 over a minefield 3x3 with a 💣 bomb in the top left
_when_ the user clean 🧹 the middle
_then_ the minesweeper raise a free ✅ cell!

---

## Refactor 
✅ - Move the integration of the board and minefield into the minesweeper  
✅ - Minefield should contain bombs while the minesweeper raises a boom for the bomb

---

## US4 Get the number of bombs around the cell

**UAT 1:** ✅  
_Given_ a board 3x3 over a minefield 3x3 with a 💣 bomb in the top left
_when_ the user clean 🧹 the middle
_then_ the minesweeper raise an indicator of 1!

**UAT 2**
_Given_ a board 3x3 over a minefield 3x3 with a 💣 bomb in the top left, top middle and middle left
_when_ the user clean 🧹 the middle
_then_ the minesweeper raise an indicator of 3!

**UAT 3**
TBD



---
UAT 4
Given
minesweeper = new Minesweeper([['💣', '💣', ' '], ['💣', ' ', ' '], [' ', ' ', ' ']]);
When
minesweeper.clean(1,1);
Then
minesweeper.gameStatus().not.toBe("game over")
minesweeper.print('+-+-+-+\n | | \n+-+-+-+\n |3| \n+-+-+-+\n | | \n+-+-+-+');

UAT 4.1
Given minefield.mines = [['💣', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']]
When minefield.getNeighbouringBombCount(1,1)
Then return '1'

UAT 4.2
Given minefield.mines = [['💣', '💣', ' '], ['💣', ' ', ' '], [' ', ' ', ' ']]
When minefield.getNeighbouringBombCount(1,1)
Then return '3'

UAT 4.3
Given minefield.mines = [['💣', '💣', '💣'], ['💣', ' ', '💣'], ['💣', '💣', '💣']]
When minefield.getNeighbouringBombCount(1,1)
Then return '8'

UAT 5
Given
minesweeper = new Minesweeper([['💣', '💣', '💣'], ['💣', ' ', '💣'], ['💣', '💣', '💣']]);
When
minesweeper.clean(1,1);
Then
minesweeper.gameStatus().not.toBe("game over")
minesweeper.print('+-+-+-+\n | | \n+-+-+-+\n |8| \n+-+-+-+\n | | \n+-+-+-+');

UAT 6
Given
minesweeper = new Minesweeper([[' ', '💣', '💣'], ['💣', '💣', '💣'], ['💣', '💣', '💣']]);
When
minesweeper.clean(0,0);
Then
minesweeper.gameStatus().not.toBe("game over")
minesweeper.print('+-+-+-+\n3| | \n+-+-+-+\n | | \n+-+-+-+\n | | \n+-+-+-+');

UAT 7
Given
minesweeper = new Minesweeper([['💣', '💣', ' '], ['💣', '💣', ' '], [' ', ' ', ' ']]);
When
minesweeper.clean(1,1);
Then
minesweeper.gameStatus().toBe("game over")