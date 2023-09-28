function solution(tickets) {
  const route = [];
  const stack = ["ICN"]; 

  tickets.sort(); 

  while (stack.length > 0) {
    const current = stack[stack.length - 1];
    let found = false;

    for (let i = 0; i < tickets.length; i++) {
      const [from, to] = tickets[i];

      if (from === current) {
        // 출발 공항이 현재 공항과 일치하는 경우
        stack.push(to); // 스택에 도착 공항을 추가
        tickets.splice(i, 1); // 사용한 티켓을 제거
        found = true;
        break;
      }
    }

    if (!found) {
      route.push(stack.pop());
    }
  }

  return route.reverse();
}