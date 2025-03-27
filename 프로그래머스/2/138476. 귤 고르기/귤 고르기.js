function solution(k, tangerine) {
  const sizeMap = new Map();

  // 1. 크기별 개수 세기
  for (let size of tangerine) {
    sizeMap.set(size, (sizeMap.get(size) || 0) + 1);
  }

  // 2. 개수 기준 내림차순 정렬
  const sorted = [...sizeMap.values()].sort((a, b) => b - a);

  let count = 0;
  let kind = 0;

  // 3. 많은 크기부터 꺼내면서 k개 채우기
  for (let num of sorted) {
    k -= num;
    kind++;
    if (k <= 0) break;
  }

  return kind;
}
