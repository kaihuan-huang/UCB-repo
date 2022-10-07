// Fibonacci sequence( example of recursion)
//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233 ...
//index 2, 3, 4, 5, 6, 7,  8,  9   10   11
const fibonacci = (position) => {
  // index < 2 , f(0) = 0; f(1) =1
  if (position < 2) {
    return position;
  }
  // Fn = Fn-1 + Fn-2 (applies to all other integers)
  return fibonacci(position - 1) + fibonacci(position - 2);
};

// TODO: What will this return? 34
//F9 = F9-1 + F9-2 = F8 + F7 = 21 + 13 = 34
console.log(fibonacci(9));
console.log(fibonacci(10));
console.log(fibonacci(20));
