function findFirstRepeated(gifts: Array<number>): number {
  const map = new Map();
  for (let i = 0; i < gifts.length; i++) {
    if (map.has(gifts[i])) {
      return gifts[i];
    }
    map.set(gifts[i], i);
  }
  return -1;
}
