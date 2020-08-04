const convert = (s, numRows) => {
  if (numRows === 1) {
    return s;
  }
  let distance = (2 * (numRows - 1));
  let result = '';
  let zigs = [];
  let currentZig = [];
  for (let i = 0; i < s.length; i++) {
    if (i % distance === 0){
      result+= s[i];
      zigs.push(currentZig);
      currentZig = [];
    } else {
      currentZig.push(s[i])
    }
  }
  while (currentZig.length !== distance - 1) {
    currentZig.push(0);
  }
  zigs.push(currentZig);
  zigs.shift();
  for (let i = 0; i < numRows - 2; i++) {
    for (let j = 0; j < zigs.length; j++) {
      let left = zigs[j][0];
      let right = zigs[j][zigs[j].length - 1];
      zigs[j].shift();
      zigs[j].pop();
      if (typeof left === 'string') {
        result += left;
      }
      if (typeof right === 'string') {
        result += right;
      }
    }
  }
  for (let i = 0; i < zigs.length; i++) {
    if (typeof zigs[i][0] === 'string') {
      result += zigs[i][0];
    }
  }
  return result;
}




// TEST SUITE

// TEST 1

console.log(convert('PAYPALISHIRING', 3) === 'PAHNAPLSIIGYIR');

// TEST 2

console.log(convert('PAYPALISHIRING', 4) === 'PINALSIGYAHRPI');

// TEST 3

console.log(convert('', 1));