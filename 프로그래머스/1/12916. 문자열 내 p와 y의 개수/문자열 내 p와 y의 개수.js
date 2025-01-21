function solution(s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    s.toLowerCase()[i] === "p" ? (count += 1) : (count += 0);
    s.toLowerCase()[i] === "y" ? (count -= 1) : (count += 0);
  }

  return count === 0 ? true : false;
}