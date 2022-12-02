

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    var p1 = 0;
    var p2 = nums.length-1;

    var p;

    while(p1+1 < p2) {
        p = Math.floor((p1 + p2) / 2);

        if(nums[p] < target) {
            p1 = p;
        } else if(nums[p] > target) {
            p2 = p;
        } else {
            return p;
        }
    }

    if(nums[p1] === target) {
        return p1;
    }
    if(nums[p2] === target) {
        return p2;
    }
    return -1;
};