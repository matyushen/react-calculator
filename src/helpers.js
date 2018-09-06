// @link https://stackoverflow.com/a/13077966/1843626
export function preformCalculation(first, second, operation) {
  const math_it_up = {
    "+": (x, y) => {
      return x + y;
    },
    "-": (x, y) => {
      return x - y;
    },
    "*": (x, y) => {
      return x * y;
    },
    "/": (x, y) => {
      return x / y;
    }
  };
  return math_it_up[operation](Number(first), Number(second));
}
