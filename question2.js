//Question 2: Two Sum
function twoSum(nums, target) {
    let map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    
    throw new Error("No solution found"); // Error handling for edge cases
}

// Example:
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]


