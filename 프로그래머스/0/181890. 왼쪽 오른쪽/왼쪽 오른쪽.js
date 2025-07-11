function solution(strList) {
  const leftIdx = strList.indexOf('l');
  const rightIdx = strList.indexOf('r');

  if (leftIdx === -1 && rightIdx === -1) {
    return [];
  }

  if (leftIdx !== -1 && (rightIdx === -1 || leftIdx < rightIdx)) {
    return strList.slice(0, leftIdx);
  }

  if (rightIdx !== -1 && (leftIdx === -1 || rightIdx < leftIdx)) {
    return strList.slice(rightIdx + 1);
  }
}