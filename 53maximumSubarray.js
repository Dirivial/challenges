/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if(nums.length === 1) return nums[0];
    
    var currentSum = nums[0];
    
    var bestSum = nums[0];
    
    for(var i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        bestSum = Math.max(bestSum, currentSum);
    }
    return bestSum;
};
