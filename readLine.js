function matchingStrings(strings, queries) {
  let result = [];
  for (let q = 0; q < queries.length; q++) {
    let count = 0;
    for (let s = 0; s < strings.length; s++) {
      if (queries[q] === strings[s]) {
        count++;
      }
    }
    result.push(count);
  }
  return result;
}

matchingStrings(["aba", "baba", "aba", "xzxb"], ["aba", "xzxb", "ab"]); // [2, 1, 0]
