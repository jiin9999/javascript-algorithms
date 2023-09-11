function solution(array, commands) {
    const result = [];
    for(let i = 0; i < commands.length; i++){
        const DividedArray = array.slice(commands[i][0] - 1, commands[i][1])
        DividedArray.sort((a,b) => a - b);
        result.push(DividedArray[commands[i][2] - 1])
    }
    return result;
}