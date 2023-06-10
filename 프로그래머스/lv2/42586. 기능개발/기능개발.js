function solution(progresses, speeds) {
    const expectWorkDay = [];
    const answer = [];
    let count = 0;
    for(let i=0; i<progresses.length; i++){
        count = 0;
        while(progresses[i] < 100){
            progresses[i] += speeds[i]
            count += 1;
        }
        expectWorkDay.push(count);
    }
    
    let maxValue = 0;
    let countWork = 1;
    
    for(let i=0; i<expectWorkDay.length; i++){
        if(maxValue < expectWorkDay[i]){
            maxValue = expectWorkDay[i]
            answer.push(countWork);
        } else {
            answer[answer.length-1] += 1;
        }
    }
    
    return answer;
}