function pow(x, n) {
  if (n < 0) return NaN; //для не дійсних помилка NaN
  if (Math.round(n) != n) return NaN; //для не цілих помилка NaN

  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x; //х множиться сам на себе та збільшує result i разів, якщо воно менше за n.
  }

  return result;
}
