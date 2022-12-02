/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    var prefix = "";
    var index = 0;

    while (true) {
        if(index === strs[0].length)
            break;
        prefix = prefix + strs[0].charAt(index);
        for (var i = 1; i < strs.length; i++) {
            if(!strs[i].startsWith(prefix)) {
                return prefix.substring(0, index);
            }
        }
        index = index + 1;
    }
    return prefix;
};