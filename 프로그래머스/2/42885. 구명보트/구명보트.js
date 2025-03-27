function solution(people, limit) {
  people.sort((a, b) => a - b); // 오름차순 정렬

  let left = 0;
  let right = people.length - 1;
  let count = 0;

  while (left <= right) {
    if (people[left] + people[right] <= limit) {
      left++; // 둘이 함께 탑승
    }
    right--; // 무거운 사람은 무조건 보냄
    count++; // 보트 하나 사용
  }

  return count;
}
