
var epicMap = new Map();

epicMap.set('I',1);
epicMap.set('V',5);
epicMap.set('X',10);
epicMap.set('L',50);
epicMap.set('C',100);
epicMap.set('D',500);
epicMap.set('M',1000);
epicMap.set('IV', 4);
epicMap.set('IX', 9);
epicMap.set('XL', 40);
epicMap.set('XC', 90);
epicMap.set('CD', 400);
epicMap.set('CM', 900);

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var sum = 0;
    for(var i = 0; i < s.length; i++) {
        if(i === s.length - 1) {
            sum += epicMap.get(s[i]);
            break;
        }
        if(epicMap.get(s[i] + s[i + 1])) {
            sum += epicMap.get(s[i] + s[i + 1]);
            
            i++;
        } else {
            sum += epicMap.get(s[i])
        }
        console.log(sum);
    }
    return sum;
};