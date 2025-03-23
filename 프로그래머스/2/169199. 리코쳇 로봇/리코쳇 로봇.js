function solution(board) {
    const n = board.length; // 세로 길이
    const m = board[0].length; // 가로 길이

    const directions = [
        [-1, 0], // 위
        [1, 0],  // 아래
        [0, -1], // 왼쪽
        [0, 1],  // 오른쪽
    ];
    // 방문 기록
    const visited = new Array(n).fill(null).map(() => new Array(m).fill(false));
    let startX, startY;

    // 시작 위치 찾기
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (board[i][j] === 'R') {
                startX = i;
                startY = j;
            }
        }
    }

    const queue = [];
    queue.push([startX, startY, 0]); // (x,y,이동 횟수)
    visited[startX][startY] = true;
    while (queue.length > 0) {
        const [x, y, count] = queue.shift();
        if (board[x][y] === 'G') {
        return count;
        }
        
        for (const [dx, dy] of directions) {
            let nx = x;
            let ny = y;

            // 한 방향으로 미끄러져 이동
            while (true) {
                const nextX = nx + dx;
                const nextY = ny + dy;
                if (
                    nextX < 0 || nextX >= n || nextY < 0 || nextY >= m ||
                    board[nextX][nextY] === 'D') {
                    break;
                }
                nx = nextX;
                ny = nextY;
            }
            if (!visited[nx][ny]) {
                visited[nx][ny] = true;
                queue.push([nx, ny, count + 1]);
            }
        }
    }
    return -1; // 도달 불가능
}
