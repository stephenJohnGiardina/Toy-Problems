/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = (board) => {
  // Checks for any repeats in all columns and rows
  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; j < board[0].length; j += 1) {
      const current = board[i][j];
      if (current !== '.') {
        for (let k = 0; k < j; k += 1) {
          if (current === board[i][k]) return false;
        }
        for (let k = j + 1; k < board.length; k += 1) {
          if (current === board[i][k]) return false;
        }
        for (let k = 0; k < i; k += 1) {
          if (current === board[k][j]) return false;
        }
        for (let k = i + 1; k < board.length; k += 1) {
          if (current === board[k][j]) return false;
        }
      }
    }
  }
  // Checks for any repeats in all boxes
  const boxes = [
    [
      board[0][0],
      board[0][1],
      board[0][2],
      board[1][0],
      board[1][1],
      board[1][2],
      board[2][0],
      board[2][1],
      board[2][2],
    ],
    [
      board[0][3],
      board[0][4],
      board[0][5],
      board[1][3],
      board[1][4],
      board[1][5],
      board[2][3],
      board[2][4],
      board[2][5],
    ],
    [
      board[0][6],
      board[0][7],
      board[0][8],
      board[1][6],
      board[1][7],
      board[1][8],
      board[2][6],
      board[2][7],
      board[2][8],
    ],
    [
      board[3][0],
      board[3][1],
      board[3][2],
      board[4][0],
      board[4][1],
      board[4][2],
      board[5][0],
      board[5][1],
      board[5][2],
    ],
    [
      board[3][3],
      board[3][4],
      board[3][5],
      board[4][3],
      board[4][4],
      board[4][5],
      board[5][3],
      board[5][4],
      board[5][5],
    ],
    [
      board[3][6],
      board[3][7],
      board[3][8],
      board[4][6],
      board[4][7],
      board[4][8],
      board[5][6],
      board[5][7],
      board[5][8],
    ],
    [
      board[6][0],
      board[6][1],
      board[6][2],
      board[7][0],
      board[7][1],
      board[7][2],
      board[8][0],
      board[8][1],
      board[8][2],
    ],
    [
      board[6][3],
      board[6][4],
      board[6][5],
      board[7][3],
      board[7][4],
      board[7][5],
      board[8][3],
      board[8][4],
      board[8][5],
    ],
    [
      board[6][6],
      board[6][7],
      board[6][8],
      board[7][6],
      board[7][7],
      board[7][8],
      board[8][6],
      board[8][7],
      board[8][8],
    ],
  ];
  for (let i = 0; i < boxes.length; i += 1) {
    const obj = {};
    for (let j = 0; j < boxes[i].length; j += 1) {
      if (obj[boxes[i][j]] === true) {
        return false;
      }
      if (boxes[i][j] !== '.') {
        obj[boxes[i][j]] = true;
      }
    }
  }
  return true;
};

// TEST SUITE

// TEST 1

function test1() {
  const actual = isValidSudoku([
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
  ]);
  const expected = true;
  if (actual === expected) {
    return '$$$$$';
  }
  return 'X';
}

console.log(test1());

// TEST 2

function test2() {
  const actual = isValidSudoku([
    ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
  ]);
  const expected = false;
  if (actual === expected) {
    return '$$$$$';
  }
  return 'X';
}

console.log(test2());

// TEST 3

function test3() {
  const actual = isValidSudoku([
    ['.', '.', '.', '.', '.', '5', '3', '2', '.'],
    ['.', '.', '6', '4', '7', '.', '5', '.', '.'],
    ['.', '.', '3', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '8', '.', '4', '.'],
    ['9', '.', '.', '.', '.', '.', '7', '.', '.'],
    ['.', '4', '.', '9', '.', '.', '.', '.', '.'],
    ['.', '5', '.', '.', '.', '.', '2', '.', '.'],
    ['.', '.', '.', '.', '1', '.', '.', '.', '.'],
    ['8', '.', '.', '.', '5', '.', '.', '.', '.'],
  ]);
  const expected = true;
  if (actual === expected) {
    return '$$$$$';
  }
  return 'X';
}

console.log(test3());
