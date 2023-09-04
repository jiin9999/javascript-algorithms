function solution(prices) {
    let answer = new Array(prices.length).fill(0);
    let stack = [];

    for (let i = 0; i < prices.length; i++) {
        let currentPrice = prices[i];
        
        while (stack.length > 0) {
            let lastTime = stack[stack.length - 1];
            let lastPrice = prices[lastTime];

            if (currentPrice < lastPrice) {
                stack.pop();
                answer[lastTime] = i - lastTime;
            } else {
                break;
            }
        }

        stack.push(i);
    }

    while (stack.length > 0) {
        let lastTime = stack.pop();
        answer[lastTime] = prices.length - 1 - lastTime;
    }

    return answer;
}

