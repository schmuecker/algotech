bin = (n, print = true) => {
  if (n <= 0) return 0;
  let ex = 0;
  while (n >= Math.pow(2, ex + 1)) {
    ex++;
  }
  const rest = n - Math.pow(2, ex);
  const result = Math.pow(10, ex) + bin(rest, false);
  if (print) {
    console.log("decimal = ", n);
    console.log("binary = ", result);
  }
  return result;
};

bin(10);

// 2^5 2^4 2^3 2^2 2^1 2^0
// 32  16  8   4   2   1

// -> 25
// 1. Größte Zweierpotenz bestimmen
// 2. Diese von Dezimalzahl abziehen
// 3. Rest in Funktion reingeben
