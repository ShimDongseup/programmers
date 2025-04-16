function solution(n) {
    // 현재 숫자 n의 2진수에서 1의 개수를 구함
    const targetOneCount = n.toString(2).split('1').length - 1;

    let next = n + 1; // n보다 큰 수부터 하나씩 증가시키며 확인

    while (true) {
        // 현재 수(next)를 2진수로 변환한 후, 1의 개수를 구함
        const nextOneCount = next.toString(2).split('1').length - 1;

        // 만약 1의 개수가 같다면, 조건을 만족하는 가장 작은 수이므로 리턴
        if (nextOneCount === targetOneCount) return next;

        next++; // 조건에 맞지 않으면 다음 수 확인
    }
}
