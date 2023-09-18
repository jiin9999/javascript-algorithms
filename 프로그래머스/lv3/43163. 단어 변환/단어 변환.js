// 모든 track을 다 비교하고 그 중 max 값
// 모든 track을 다 검색하는게 bfs, dfs인가..?

// 1. 그래프 그려서 begin을 루트 노드로 한다.
// 2. begin에서 갈 수 있는 words 배열안의 값들을 하나씩 간선을 추가
// 3. 그리고 해당 값에서 갈 수 있는 다른 값들에 또 간선을 추가한다.
// 4. 최종적으로 그려진 그래프에서 begin에서 target으로 가는 가장 짧은 값을 찾는다. 

function canTransform(str1, str2) {
    let diff = 0;
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) diff++;
        if (diff > 1) return false;
    }
    return diff === 1;
}

function findShortestPath(graph, begin, target) {
    let visited = new Set();
    let stack = [[begin, 0]];

    while (stack.length > 0) {
        const [current, steps] = stack.pop();

        if (current === target) {
            return steps;
        }

        visited.add(current);

        if (graph[current]) {
            for (const neighbor of graph[current]) {
                if (!visited.has(neighbor)) {
                    stack.push([neighbor, steps + 1]);
                }
            }
        }
    }

    return 0;
}

function solution(begin, target, words) {
    if (!words.includes(target)) {
        return 0;
    }

    let graph = {};

    // Create edges between nodes
    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (canTransform(words[i], words[j])) {
                graph[words[i]] = (graph[words[i]] || []).concat(words[j]);
                graph[words[j]] = (graph[words[j]] || []).concat(words[i]);
            }
        }
    }

    // Create edges for 'begin'
    for (const word of words) {
        if (canTransform(begin, word)) {
            graph[begin] = (graph[begin] || []).concat(word);
        }
    }

    return findShortestPath(graph, begin, target);
}