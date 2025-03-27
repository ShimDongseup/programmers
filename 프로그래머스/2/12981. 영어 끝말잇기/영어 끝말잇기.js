function solution(n, words) {
  const used = new Set();
  used.add(words[0]);

  for (let i = 1; i < words.length; i++) {
    const prev = words[i - 1];
    const curr = words[i];

    const isUsed = used.has(curr); // 중복
    const isWrongLink = prev[prev.length - 1] !== curr[0]; // 틀린 연결
    const isTooShort = curr.length <= 1; // 한 단어

    if (isUsed || isWrongLink || isTooShort) {
      const player = (i % n) + 1;
      const turn = Math.floor(i / n) + 1;
      return [player, turn];
    }

    used.add(curr);
  }

  return [0, 0]; // 탈락자 없음
}
