// 1. 0에서 numbers 배열 안의 값들을 각각 더하고 뺀 것을 자식 노드로 만들어서
// 2. 최종 자식 노드에 있는 값들 중 target과 값이 같은 수를 return 한다.

function solution(numbers, target) {
    let answer = 0;

    function dfs(sum, index) {
        // 모든 숫자를 사용했을 때
        if (index === numbers.length) {
            // 타겟 넘버와 같으면 답을 하나 증가
            if (sum === target) {
                answer++;
            }
            return;
        }

        // 현재 숫자를 더하는 경우
        dfs(sum + numbers[index], index + 1);

        // 현재 숫자를 빼는 경우
        dfs(sum - numbers[index], index + 1);
    }

    dfs(0, 0);

    return answer;
}

// 테스트 케이스
console.log(solution([1, 1, 1, 1, 1], 3));  // 출력: 5
console.log(solution([4, 1, 2, 1], 4));    // 출력: 2