// 효진이가 n번째 칸에 도달하는 경우의 수
// n-1번째 칸까지 오는 방법 + n-2번째 칸까지 오는 방법의 합
// dp[n] = dp[n-1] + dp[n-2]
function solution(n) {
  const dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;
  }

  return dp[n];
}
