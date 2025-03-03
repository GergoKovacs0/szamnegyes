function tableGame(table) {
  const clicks = [table[0][0], table[0][2], table[2][0], table[2][2]];

  if (table[0][1] !== clicks[0] + clicks[1]) return [-1];
  if (table[1][0] !== clicks[0] + clicks[2]) return [-1];
  if (table[1][1] !== clicks[0] + clicks[1] + clicks[2] + clicks[3])
    return [-1];
  if (table[1][2] !== clicks[1] + clicks[3]) return [-1];
  if (table[2][1] !== clicks[2] + clicks[3]) return [-1];

  return clicks;
}
