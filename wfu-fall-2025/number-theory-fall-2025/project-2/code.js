const c = 1;
const d = 2;

function add([X1, Y1, Z1], [X2, Y2, Z2]) {
  A = Z1 * Z2;
  B = A ** 2;
  C = X1 * X2;
  D = Y1 * Y2;
  E = d * C * D;
  F = B - E;
  G = B + E;

  const X3 = A * F * ((X1 + Y1) * (X2 + Y2) - C - D);
  const Y3 = A * G * (D - C);
  const Z3 = c * F * G;

  return [X3, Y3, Z3];
}

function double(P) {
  return add(P, P);
}

function compress(x) {
  const y = Math.sqrt((c ** 2 - x ** 2) / (1 - c ** 2 * d * x ** 2));
  return [x, y];
}
