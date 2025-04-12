function solution(s) {
    let count = 0; // 변환 횟수
    let removedZero = 0; // 제거된 0의 총 개수

    while (s !== "1") {
        // 현재 문자열에서 0 개수 세기
        const zeroCount = (s.match(/0/g) || []).length;
        removedZero += zeroCount;

        // 0 제거하고 남은 길이를 2진수로 변환
        const onesLength = s.replace(/0/g, "").length;
        s = onesLength.toString(2);

        count++;
    }

    return [count, removedZero];
}
