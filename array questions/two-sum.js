function twoSum(nums, target) {
    let seen = {}
    for(let i = 0; i < nums.length; i++){
        let needed = target - nums[i]
        if(seen[needed] !== undefined){
            return [seen[needed], i]
        }
        
        seen[nums[i]] = i
    }
}