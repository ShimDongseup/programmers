function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;
  const visited = new Array(n).fill(null).map(() => new Array(m).fill(false));
  const result = [];

  const directions = [
    [-1, 0], // 위
    [1, 0],  // 아래
    [0, -1], // 왼쪽
    [0, 1],  // 오른쪽
  ];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (!visited[i][j] && maps[i][j] !== 'X') {
        const queue = [[i, j]];
        visited[i][j] = true;
        let sum = parseInt(maps[i][j]);

        while (queue.length > 0) {
          const [x, y] = queue.shift();

          for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;

            if (
              nx >= 0 && nx < n &&
              ny >= 0 && ny < m &&
              !visited[nx][ny] &&
              maps[nx][ny] !== 'X'
            ) {
              visited[nx][ny] = true;
              queue.push([nx, ny]);
              sum += parseInt(maps[nx][ny]);
            }
          }
        }

        result.push(sum);
      }
    }
  }

  return result.length === 0 ? [-1] : result.sort((a, b) => a - b);
}
