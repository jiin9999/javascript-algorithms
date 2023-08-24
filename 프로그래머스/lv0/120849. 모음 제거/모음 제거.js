function solution(my_string) {
    const gather = ["a", "e", "i", "o", "u"];
    let newString = "";
    
    for (let i = 0; i < my_string.length; i++) {
        if (!gather.includes(my_string[i])) {
            newString += my_string[i];
        }
    }
    
    return newString;
}