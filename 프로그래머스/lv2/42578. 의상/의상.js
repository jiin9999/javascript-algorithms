function solution(clothes) {
const clothesByType = {};

    for (let i = 0; i < clothes.length; i++) {
        const [_, type] = clothes[i];
        if (!clothesByType[type]) {
            clothesByType[type] = 0;
        }
        clothesByType[type]++;
    }

    let combinations = 1;
    const types = Object.keys(clothesByType);

    for (let i = 0; i < types.length; i++) {
        combinations *= (clothesByType[types[i]] + 1);
    }

    return combinations - 1;
}