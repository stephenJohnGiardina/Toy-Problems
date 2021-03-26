def isValidSudoku(board):
  for i in range(len(board)):
    for j in range(len(board[0])):
      current = board[i][j]
      if current != '.':
        for k in range(j):
          if current == board[i][k]:
            return False
        for k in range(j + 1, len(board)):
          if current == board[i][k]:
            return False
        for k in range(i):
          if current == board[k][j]:
            return False
        for k in range(i + 1, len(board)):
          if current == board[k][j]:
            return False
  boxes = [
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
  ]
  for i in range(len(boxes)):
    obj = {}
    for j in range(len(boxes[i])):
      if boxes[i][j] in obj:
        return False
      if boxes[i][j] != '.':
        obj[boxes[i][j]] = True
  return True

# TEST SUITE

# TEST 1

def test1():
  actual = isValidSudoku([
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
  ])
  expected = True
  if (actual == expected):
    return '✔'
  return 'X'

print(test1())

# TEST 2

def test2():
  actual = isValidSudoku([
    ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
  ])
  expected = False
  if (actual == expected):
    return '✔'
  return 'X'

print(test2())

# TEST 3

def test3():
  actual = isValidSudoku([
    ['.', '.', '.', '.', '.', '5', '3', '2', '.'],
    ['.', '.', '6', '4', '7', '.', '5', '.', '.'],
    ['.', '.', '3', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '8', '.', '4', '.'],
    ['9', '.', '.', '.', '.', '.', '7', '.', '.'],
    ['.', '4', '.', '9', '.', '.', '.', '.', '.'],
    ['.', '5', '.', '.', '.', '.', '2', '.', '.'],
    ['.', '.', '.', '.', '1', '.', '.', '.', '.'],
    ['8', '.', '.', '.', '5', '.', '.', '.', '.'],
  ])
  expected = True
  if (actual == expected):
    return '✔'
  return 'X'

print(test3())
