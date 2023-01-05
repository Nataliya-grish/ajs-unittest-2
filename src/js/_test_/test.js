import { sortHealth, heroes } from "../app";

sortHealth(heroes);

const sample = [
  { name: "маг", health: 100 },
  { name: "лучник", health: 80 },
  { name: "мечник", health: 10 },
];

test("Проверка работы функции сортировки", () => {
  expect(sortHealth(heroes)).toEqual(sample);
});
