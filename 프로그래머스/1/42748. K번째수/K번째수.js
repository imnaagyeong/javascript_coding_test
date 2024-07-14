function solution(array, commands) {
  let answer = [];
  
  for (let command of commands) {
    let [i, j, k] = command;
    let subArray = array.slice(i - 1, j);
    subArray.sort((a, b) => a - b);
    answer.push(subArray[k - 1]);
  }
  
  return answer;
}