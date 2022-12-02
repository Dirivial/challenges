/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    var needleLength = needle.length;

    for(var i = 0; i < haystack.length; i++) {
        if(haystack.substring(i, i + needleLength).startsWith(needle)) {
            return i;
        }
    }
    return -1;
};

module.exports = strStr;