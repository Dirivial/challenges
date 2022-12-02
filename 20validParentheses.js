var map = new Map();
map.set('(', ')');
map.set('[', ']');
map.set('{', '}');


/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    var stack = [];
    const open = "([{"

    for (var i = 0; i < s.length; i++) {
        if (open.includes(s[i])) {
            stack.push(s[i]);
        } else {
            if(map.get(stack.pop()) !== s[i]) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
};

console.log(isValid("()"));