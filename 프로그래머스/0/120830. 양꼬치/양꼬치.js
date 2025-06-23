function solution(n, k) {
  let answer = 12000 * n + 2000 * k
  
  if (n >= 10) {
      const count = Math.floor(n / 10);
      answer = answer - 2000 * count;
  }
  
  return answer
}