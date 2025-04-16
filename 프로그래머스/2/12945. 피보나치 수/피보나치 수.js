function solution(n) {
    const MOD = 1234567;

    // 피보나치 수를 저장할 배열. 처음 두 값은 F(0)=0, F(1)=1
    const dp = [0, 1];

    // 2부터 n까지 피보나치 수를 계산
    for (let i = 2; i <= n; i++) {
        // 앞의 두 수를 더한 값을 저장하되, 결과가 커지지 않도록 매번 MOD 연산 적용
        dp[i] = (dp[i - 1] + dp[i - 2]) % MOD;
    }

    // n번째 피보나치 수의 결과를 반환
    return dp[n];
}
