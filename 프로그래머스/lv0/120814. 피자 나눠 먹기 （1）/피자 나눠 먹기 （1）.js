function solution(n) {
    if(n <= 7) {
        return 1;
    }
    
    return Math.ceil(n / 7); 
}