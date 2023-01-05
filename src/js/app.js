export const heroes = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

export function sortHealth(arr) {
  arr.sort((prev, next) => next.health - prev.health);
  return arr;
}
sortHealth(heroes);
