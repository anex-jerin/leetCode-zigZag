var convert = function (s, numRows) {
  const rows = [];
  let row = 0,
    change = 1;

  for (let i = 0; i < s.length; i++) {
    rows[row] = rows[row] ? rows[row] + s[i] : s[i];

    row += change;
    console.log(row)
    if (row === numRows - 1 || row === 0) change *= -1; 
  }
  return rows.join('');
};
console.log(convert('hellothere',5)); 