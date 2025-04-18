function solution(s) {
    const stack = [];

    for (let char of s) {
        // 스택의 마지막 문자와 현재 문자가 같으면 짝지어 제거
        if (stack[stack.length - 1] === char) {
            stack.pop(); // 짝 제거
        } else {
            stack.push(char); // 스택에 추가
        }
    }

    // 스택이 비었으면 모두 제거 성공 → 1, 아니면 → 0
    return stack.length === 0 ? 1 : 0;
}
