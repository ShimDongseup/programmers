function solution(want, number, discount) {
  // 1. 정현이의 장바구니 목록 (원하는 품목과 수량)
  const wantMap = new Map();
  for (let i = 0; i < want.length; i++) {
    wantMap.set(want[i], number[i]);
  }

  let answer = 0;

  // 2. discount에서 10일짜리 구간을 하나씩 밀면서 확인
  for (let i = 0; i <= discount.length - 10; i++) {
    const windowMap = new Map();

    // 3. 현재 10일 동안 할인되는 품목 수량 카운트
    for (let j = i; j < i + 10; j++) {
      const item = discount[j];
      windowMap.set(item, (windowMap.get(item) || 0) + 1);
    }

    // 4. 정현이의 장바구니와 할인 품목이 완벽히 일치하는지 비교
    let matched = true;
    for (const [item, cnt] of wantMap) {
      if (windowMap.get(item) !== cnt) {
        matched = false;
        break;
      }
    }

    if (matched) answer++; // 조건에 맞는 날이면 회원가입 가능 → 카운트 증가
  }

  return answer;
}
