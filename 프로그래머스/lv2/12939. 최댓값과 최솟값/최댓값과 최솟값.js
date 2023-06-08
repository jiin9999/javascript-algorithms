function solution(s) {
    var answer = '';
    const array = s.split(' ');
    answer = Math.min(...array) + " " + Math.max(...array)
    return answer;
}