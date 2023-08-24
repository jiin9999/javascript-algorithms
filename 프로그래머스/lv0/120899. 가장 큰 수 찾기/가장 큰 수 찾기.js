function solution(array) {
    const maxValue = Math.max(...array);
    return [maxValue, array.indexOf(maxValue)];
}