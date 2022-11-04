// 509. Fibonacci number

// Recursive function: return (n) number at index of fibonacci sequence

let n = 3

var fib = function (n) {
    if (n === 0 || n === 1) {
        return n;
    } else {
        return (fib(n - 2) + fib(n - 1));
    };
};

console.log(fib(n));

// Input: n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.