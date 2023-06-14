function solution(s) {
    let answer = [];
    let changeCount = 0;
    let count = 0;
    while (s!=='1'){
        for(let i=0; i<s.length; i++){
            if(s[i]==='0'){
                count += 1;
            }
        }
        s = s.replaceAll('0','');
        s = (s.length).toString(2);
        changeCount += 1;
    }
    answer.push(changeCount);
    answer.push(count);
    return answer;
}