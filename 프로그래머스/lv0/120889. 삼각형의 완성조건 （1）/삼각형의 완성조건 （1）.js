function solution(sides) {
    sides = sides.sort(function(a, b)  { return b - a; });
    console.log(sides);
    if(sides[0] < sides[1] + sides[2]){
        return 1;
    }
    
    return 2;
}