// Given two strings, find the minimum number of edits/operations required to convert the first string into the second string, given that the only operations can be insertion, removal, or replacement.

// Challenge: Do this in O(m x n) time, where m, n are the respective lengths of str1 and str2.

function editDistance(str1, str2) {
  let matrix = [];
  str1 = ' ' + str1;
  str2 = ' ' + str2;
  for (let i = 0; i < str1.length; i++) {
    matrix.push([]);
    for (let j = 0; j < str2.length; j++) {
      matrix[i].push([]);
    }
  }
  matrix[0][0] = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i === 0 && j !== 0) {
        matrix[i][j] = matrix[i][j - 1] + 1;
        continue;
      } else if (i !== 0 && j=== 0) {
        matrix[i][j] = matrix[i - 1][j] + 1;
        continue;
      } else if (i !== 0 && j !== 0) {
        if (str1[i] === str2[j]) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(matrix[i][j - 1], matrix[i - 1][j], matrix[i - 1][j - 1]) + 1;
        }
      }
    }
  }
  return matrix[matrix.length - 1][matrix[0].length - 1];
}

