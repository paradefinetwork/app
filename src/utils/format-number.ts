export function roundNumberUp(n: number): number {
  return Math.ceil(n * 1000000) / 1000000;
}

export function roundNumberDown(n: number): number {
  return Math.floor(n * 1000000) / 1000000;
}
