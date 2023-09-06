function returnsThree() {
  // Your code here
  return 3
}

function reciprocal(n)  {
  if (n < 1| n> 1000000) {
    throw new TypeError("only accepts number between 1 and 1000000");
  } else {
    return 1 / n;
  }
}

module.exports = {
  returnsThree,
  reciprocal
};


