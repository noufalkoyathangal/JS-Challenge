var numbers = [2, -3, 4, 5];
var result = numbers.reduce((sum, num) => {
  return sum + num;
}, 0);
console.log(result);
