function solution(s) {
    let count = 0;
    
    for (let char of s) {
        if (char === '(') {
        count++;
        } else {
            count--;
        }

      if (count < 0) {
          return false; // 닫는 괄호가 먼저 나온 경우
      }
    }
    return count === 0; // 모두 잘 짝지어졌는지 확인
}
