function solution(clothes) {
  const map = new Map();

  // 1. 종류별 의상 개수 카운트
  for (let [item, type] of clothes) {
    map.set(type, (map.get(type) || 0) + 1);
  }

  // 2. 각 종류별 (의상 수 + 안 입는 경우 1) 곱하고 -1
  let answer = 1;
  for (let count of map.values()) {
    answer *= (count + 1);
  }

  return answer - 1; // 아무것도 안 입는 경우 제외
}
