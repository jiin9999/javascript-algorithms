function solution(n) {
    for (let i = 0; i < n ; i++) {
        if(i * i === n) {
            return 1
        }
        
        if(i * i > n) {
            return 2
        }
    }
}