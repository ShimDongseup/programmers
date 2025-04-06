function solution(A, B) {
  A.sort((a, b) => a - b); // A 오름차순
  B.sort((a, b) => b - a); // B 내림차순

  let answer = 0;

  for (let i = 0; i < A.length; i++) {
    answer += A[i] * B[i];
  }

  return answer;
}
