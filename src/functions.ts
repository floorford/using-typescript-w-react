// easy to type your functions when you know the arguments explicitly
// args mandatory by default
// b is optional - either by setting a default or using ? symbol
function addition(a: number, b: number = 0): number {
  return a + b;
}

// can type it in the function itself OR create a type declaration
type Myfunc = (a: number, b: number) => number;

const addition2: Myfunc = (a, b) => a + b;

// sometimes you don't!
// this function will expect arg1 and 2 specifically
// everything else passed in gets gathered in the numbers array
function sumEverything(
  arg1: string,
  arg2: boolean,
  ...numbers: number[]
): number {
  return numbers.reduce((acc, val) => acc + val, 0);
}

// Overloads

// imagine one function to get area of rectangle (1) and square (2)
// 1 - function calcArea(width: number, length: number): number;
// 2 - function calcArea(length: number): number;

// how can we fit both situations?
function calcArea(...args: number[]): number {
  if (args.length === 2) {
    return args[0] * args[1]; // rectangle sorted
  }
  return Math.pow(args[0], 2); // square sorted
}
