def solveSudoku(board):
  def solve():
    for y in range(9):
      for x in range(9):
        if board[y][x] == '.':
          for n in range(1, 10):
            if possible(board, y, x, str(n)):
              board[y][x] = str(n)
              solve()
              board[y][x] = '.'
          return
    print(board)
  print(solve())



def possible (board, y, x, n):
  for i in range(9):
    if board[y][i] == n:
      return False
  for i in range(9):
    if board[i][x] == n:
      return False
  x0 = (x//3) * 3
  y0 = (y//3) * 3
  for i in range(3):
    for j in range(3):
      if board[y0 + i][x0 + j] == n:
        return False
  return True


# TEST SUITE

def isSolved(board):
  for i in range(len(board)):
    column = {}
    row = {}
    for j in range(len(board[0])):
      if board[i][j] not in column:
        column[board[i][j]] = True
      else:
        return False
      if board[j][i] not in row:
        row[board[j][i]] = True
      else:
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

# TEST 1

def test1():
  board = [
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
  ]
  solveSudoku(board)
  if isSolved(board):
    return '✔'
  return 'X'

print(test1())

# TEST 2

def test2():
  board = [
    ['.', '.', '9', '7', '4', '8', '.', '.', '.'],
    ['7', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '2', '.', '1', '.', '9', '.', '.', '.'],
    ['.', '.', '7', '.', '.', '.', '2', '4', '.'],
    ['.', '6', '4', '.', '1', '.', '5', '9', '.'],
    ['.', '9', '8', '.', '.', '.', '3', '.', '.'],
    ['.', '.', '.', '8', '.', '3', '.', '2', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '6'],
    ['.', '.', '.', '2', '7', '5', '9', '.', '.'],
  ]
  solveSudoku(board)
  if isSolved(board):
    return '✔'
  return 'X'

print(test2())
