function solution(array, height) {
    array = array.sort(function(a, b)  { return b - a; });
    
    for(let i=0; i<array.length; i++) {
        if(array[i] <= height) {
            return i;
        }
    }
    
    return array.length;
}