// https://school.programmers.co.kr/learn/courses/30/lessons/1845

function solution(nums) {
  let answer = 0;
  const selectCount = nums.length / 2;
  const hash = new Set(nums);

  answer = hash.size > selectCount ? selectCount : hash.size;

  return answer;
}
