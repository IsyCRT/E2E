const { suma, resta } = require('./math');

test('suma 2 + 3 debe ser 5', () => {
  expect(suma(2, 3)).toBe(5);
});



test('suma 3 + 3 debe ser 6', () => {
  expect(suma(3, 3)).toBe(6);
});
