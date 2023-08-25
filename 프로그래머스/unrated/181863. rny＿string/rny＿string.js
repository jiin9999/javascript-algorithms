function solution(rny_string) {
    for(let i = 0; i<rny_string.length; i++){
        rny_string = rny_string.replace("m", "rn");
    }
    return rny_string;
}