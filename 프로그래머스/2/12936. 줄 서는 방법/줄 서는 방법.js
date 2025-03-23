function solution(n, k) {
  const numbers = Array.from({ length: n }, (_, i) => i + 1);
  const factorial = [1];

  // 미리 factorial 계산해놓기
  for (let i = 1; i <= n; i++) {
    factorial[i] = factorial[i - 1] * i;
  }

  k--; // 0-indexed로 바꿔줌
  const answer = [];

  for (let i = 0; i < n; i++) {
    const blockSize = factorial[n - 1 - i];
    const index = Math.floor(k / blockSize);
    answer.push(numbers[index]);
    numbers.splice(index, 1);
    k %= blockSize;
  }

  return answer;
}
