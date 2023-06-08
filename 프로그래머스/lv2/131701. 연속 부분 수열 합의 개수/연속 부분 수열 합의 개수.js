function solution(elements) {
  const n = elements.length;

  // 배열을 자신과 연결하여 더 큰 원형 배열을 생성합니다
  const concatenated = elements.concat(elements);
  const sums = new Set();

  for (let i = 0; i < n; i++) {
    for (let j = i; j < i + n; j++) {
      // 현재 인덱스 i부터 j까지의 부분 수열을 추출합니다
      const subsequence = concatenated.slice(i, j + 1);
      
      // 부분 수열의 합을 계산합니다
      const sum = subsequence.reduce((acc, curr) => acc + curr, 0);
      
      // 합을 sums 세트에 추가합니다
      sums.add(sum);
    }
  }

  // sums 세트의 크기를 반환합니다
  return sums.size;
}