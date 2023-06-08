function solution(k, tangerine) {
  // 각 귤 크기의 빈도를 계산하기 위한 객체 생성
  const count = {};
  let answer = 0;

  // 귤 크기의 빈도 계산
  for (let i = 0; i < tangerine.length; i++) {
    const size = tangerine[i];
    count[size] = (count[size] || 0) + 1;
  }

  // 귤 크기를 갯수에 따라 내림차순으로 정렬
  const sortedCount = Object.values(count).sort((a, b) => b - a);

  for(let i=0; i<sortedCount.length; i++){
      if(sortedCount[i] < k){
          k -= sortedCount[i];
          answer += 1;
      } else{
          return answer + 1;
      }
  }
}