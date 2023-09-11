function solution(citations) {
    let result = 0;
    citations.sort((a,b) => b - a);
    if(citations[0] === 0) {
        return 0;
    }
    for(let i = 0; i < citations.length; i++){
        if(citations[i] > result){
            result += 1;
        }
    }
    return result;
}