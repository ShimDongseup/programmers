function solution(s) {
  return s
    .split(' ') // 공백 기준으로 나눔
    .map(word => {
      if (word.length === 0) return ''; // 공백 여러 개일 때
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(' '); // 다시 공백으로 붙임
}
