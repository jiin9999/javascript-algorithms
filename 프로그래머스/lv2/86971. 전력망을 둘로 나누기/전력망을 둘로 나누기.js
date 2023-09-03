    // result 값을 만든다. (메모리 상 가장 큰 값)
    // 아래 과정을 n번 만큼 반복한다.
    // 1. wire를 하나 없애고 분할된 2개의 셋을 비교
    // 1.1 셋은 어떻게 셀까
    // 1.2 하나의 선을 뺐을 때, 선에 연결된 각각의 노드에 붙어 있는 노드가 몇개인지 세면된다!
    // (노드 갯수 세는 로직 고민) (dfs 쓰면 될듯)
    // 2. 둘 중 하나만 세고, n-노드의 갯수 하면 될듯?
    // 3. result와 절대값 중 더 작은 값을 result에 넣는다.

function solution(n, wires) {
    let result = [];

    
    for(let i = 0; i < wires.length; i++) {
        const newArray = [...wires];
        const deleteWire = newArray.splice(i, 1);
        
        // 시작 노드: 이 노드부터 탐색을 시작합니다.
        const startNode = deleteWire[0][0];

        // 방문한 노드를 기록하기 위한 Set: 이미 방문한 노드를 중복으로 방문하지 않기 위해 사용합니다.
        const visited = new Set();

        // 시작 노드를 방문한 것으로 표시: 시작점은 미리 방문한 것으로 추가합니다.
        visited.add(startNode);

        // 새로운 노드가 추가될 때까지 반복: 새로운 노드가 추가되면 true, 그렇지 않으면 false
        let added = true;
        while (added) {
            added = false;  // added를 초기화

            // 배열의 모든 원소(노드 쌍)을 검사합니다.
            for (const [a, b] of newArray) {
                // a가 방문한 노드이고, b가 아직 방문하지 않았다면
                if (visited.has(a) && !visited.has(b)) {
                    visited.add(b);  // b를 방문한 노드로 추가
                    added = true;    // 새로운 노드가 추가됨
                }
                // b가 방문한 노드이고, a가 아직 방문하지 않았다면
                if (visited.has(b) && !visited.has(a)) {
                    visited.add(a);  // a를 방문한 노드로 추가
                    added = true;    // 새로운 노드가 추가됨
                }
            }
        }
        result.push(visited.size);
    }
    result = result.map((x) => {return Math.abs(n - 2 * x)});
    console.log(result);
    
    return Math.min(...result);
}