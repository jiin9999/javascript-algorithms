function solution(nums) {
    // nums.length / 2 마리 가져갈 수 있다.
    // set으로 중복 제거한다음에, set.size랑 nums.length / 2 중에 더 작은 값을 출력
    const set = new Set();
    for(let i = 0; i < nums.length; i++){
        set.add(nums[i]);
    } 
    console.log(set);
    return Math.min(nums.length/2, set.size);
}