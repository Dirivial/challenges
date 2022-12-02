/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    var low = 0;
    var high = nums.length-1;
    var p;
    
    while(low <= high) {
        p = Math.floor((low + high) / 2);   

        if(nums[p] > target) {
            high = p-1;
        } else if(nums[p] < target) {
            low = p+1;
        } else {
            return p;
        }
    }
    return low;
};

module.exports = searchInsert;
