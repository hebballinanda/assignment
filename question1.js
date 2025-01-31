// Question 1: Longest Increasing Subsequence (LIS)
function lengthOfLIS(nums) {
    if (!nums.length) return 0;
    
    let dp = new Array(nums.length).fill(1);
    let maxLIS = 1;
    
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        maxLIS = Math.max(maxLIS, dp[i]);
    }
    
    return maxLIS;
}

// Example:
console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])); // Output: 4

