function solution(s) {
    // 1. 문자열을 일단 전부 소문자로 바꾼다.
    // 2. 문자열을 ' '(공백을) 기준으로 배열로 나눈다.
    // 3. charAt(0), toUpperCase을 이용해서 첫글자를 대문자를 대문자로 바꾸고 slice를 이용해 나머지 글자와 붙인다.
    
    let answer = '';
    let firstChar = '';
    s = s.toLowerCase();
    let strArray = s.split(' ');
    for(let i=0; i<strArray.length; i++){
        firstChar = strArray[i].charAt(0).toUpperCase();
        strArray[i] = firstChar + strArray[i].slice(1);
    }
    answer = strArray.join(' ');
    return answer;
}