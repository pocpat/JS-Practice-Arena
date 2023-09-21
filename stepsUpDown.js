function valleys(step, path) {
  const pathArr = path.split("");
  let currentLevel = 0;
  let valleyCount = 0;

  for (const pathStep of pathArr) {
    if (pathStep === "U") {
      currentLevel++;
    } else if (pathStep === "D") {
      currentLevel--;
    }

    if (currentLevel === 0 && pathStep === "U") {
      valleyCount++;
    }
  }

  return valleyCount;
}

module.exports = { valleys };
