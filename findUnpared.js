function lonelyinteger(a) {
  let unique = 0;
  for (let i = 0; i < a.length; i++) {
    for (let num of a) {
      unique ^= num;
    }
    return unique;
  }
}
lonelyinteger([1, 2, 3, 4, 3, 2, 1]); // 4
