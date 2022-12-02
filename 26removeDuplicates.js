/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var numOfRemoved = 0;
    for(var i = nums.length - 2; i >= 0; i--) {
        if(nums[i] == nums[i + 1]) {
            numOfRemoved++;
            nums.splice(i, 1);
        }
    }
    return (nums.length);
};

module.exports = removeDuplicates;