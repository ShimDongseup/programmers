function solution(brown, yellow) {
  const total = brown + yellow; // 넓이

  for (let height = 3; height <= total; height++) {  // 최소 높이 노랑1개+갈색2 = 3
    if (total % height === 0) {
      const width = total / height;

      if (width < height) continue; // 가로는 세로보다 크거나 같아야 함

      if ((width - 2) * (height - 2) === yellow) {
        return [width, height];
      }
    }
  }
}
