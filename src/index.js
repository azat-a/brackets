module.exports = function check(str, bracketsConfig) {
  let openingBrackets = [], closingBrackets = [];
  for (item of bracketsConfig) {
    openingBrackets.push(item[0]);
    closingBrackets.push(item[1]);
  }
  
  let inputArr = str.split('');
  let stack = [];
  for (item of inputArr) {
    i = openingBrackets.indexOf(item);
    j = closingBrackets.indexOf(item);

    if (i != -1) {
      stack.push(i);
    }
    else if (stack.length === 0 || stack[stack.length - 1] != j) {
      return false;
    }
    else {
      stack.pop();
    }

    if (i === j
      && stack.length >= 2
      && stack[stack.length - 1] === i
      && stack[stack.length - 2] === i
    ) {
      stack.pop();
      stack.pop();
    }
  }
  
  return (stack.length === 0);
}
