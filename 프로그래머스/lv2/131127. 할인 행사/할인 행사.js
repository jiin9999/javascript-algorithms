function solution(want, number, discount) {
    let answer = 0;
    
    for(let i=0; i<discount.length-9; i++){
        const countDiscount = {};
        const tenDays = discount.slice(i,i+10);
        for(let k=0; k<tenDays.length; k++){
            if (!countDiscount[tenDays[k]]) {
                countDiscount[tenDays[k]] = 0;
            }
            countDiscount[tenDays[k]]++;
        }
        
        let flag = true;
        for(let j=0; j<want.length; j++){
            if(!(number[j]<=countDiscount[want[j]])){
                flag = false;
            } 
        }
        if(flag === true){
            answer += 1;
        }
    }
    
    return answer;
}