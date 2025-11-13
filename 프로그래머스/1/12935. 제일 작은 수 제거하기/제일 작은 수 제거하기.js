function solution(arr) {
  const IndexMin = arr.indexOf(Math.min(...arr));
  arr.length !== 1 ? arr.splice(IndexMin, 1) : arr.splice(0, 1, -1);
  return arr;
}