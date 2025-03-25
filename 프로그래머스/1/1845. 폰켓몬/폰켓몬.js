function solution(nums) {
    const availableCount = nums.length / 2;
    const pokemonList = [...new Set(nums)];
    
    const answer = (pokemonList.length - availableCount) > 0 ? availableCount : pokemonList.length
    return answer;
}