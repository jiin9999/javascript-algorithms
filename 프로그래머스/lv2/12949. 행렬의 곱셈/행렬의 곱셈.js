function solution(arr1, arr2) {
    const result = [];

    for(let i = 0; i < arr1.length; i++) {
        let arrayEl = [];
        for(let j = 0; j < arr2[0].length; j++) {
            let value = 0;
            for(let k = 0; k < arr2.length; k++) {
                value += arr1[i][k] * arr2[k][j];
            }
            arrayEl.push(value);
        }
        result.push(arrayEl);
    }
    return result;
}
// 1번요소(arr1의 [0][0] * arr2의 [0][0]) + (arr1의 [0][1] * arr2의 [1][0]) + (arr1의 [0][2] * arr2의 [2][0])
// 2번요소(arr1의 [0][0] * arr2의 [0][1]) + (arr1의 [0][1] * arr2의 [1][1]) + (arr1의 [0][2] * arr2의 [2][1])
// 3번요소(arr1의 [0][0] * arr2의 [0][2]) + (arr1의 [0][1] * arr2의 [1][2]) + (arr1의 [0][2] * arr2의 [2][2])
