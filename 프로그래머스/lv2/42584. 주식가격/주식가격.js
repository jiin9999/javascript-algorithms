function solution(prices) {
    // 정답을 저장할 배열을 생성하고 0으로 초기화
    let answer = new Array(prices.length).fill(0);
    // 스택 자료구조를 이용하기 위한 배열 선언
    let stack = [];

    // 주식 가격 배열을 순회
    for (let i = 0; i < prices.length; i++) {
        let currentPrice = prices[i];
        
        // 스택이 빌 때까지 반복
        while (stack.length > 0) {
            // 스택의 마지막(최근) 시간을 확인
            const lastTime = stack[stack.length - 1];
            // 그 시간의 주식 가격을 가져옴
            const lastPrice = prices[lastTime];

            // 현재 가격이 마지막 시간의 가격보다 작다면
            if (currentPrice < lastPrice) {
                // 스택에서 마지막 시간을 제거
                stack.pop();
                // 정답 배열에 현재 시간 - 마지막 시간을 저장
                answer[lastTime] = i - lastTime;
            } else {
                // 가격이 떨어지지 않았다면 반복문 탈출
                break;
            }
        }

        // 현재 시간을 스택에 저장
        stack.push(i);
    }

    // 스택에 남아 있는 시간들에 대해
    while (stack.length > 0) {
        // 스택에서 마지막 시간을 제거
        const lastTime = stack.pop();
        // 마지막까지 가격이 떨어지지 않았으므로, 전체 시간 - 마지막 시간을 정답 배열에 저장
        answer[lastTime] = prices.length - 1 - lastTime;
    }

    // 정답 배열을 반환
    return answer;
}