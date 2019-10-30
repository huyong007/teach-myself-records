/**
 * @param {string} s
 * @return {boolean}
 */
// 思路一：正则匹配，取出数字和字母，然后递归比较或者是hashmap或者数组方法
let resualt;
var isPalindrome = function (s) {
    s = s.replace(/[^0-9a-zA-Z]/g, '').toLocaleUpperCase();
    s = s.split('');
    recurFun(0, s.length - 1, s.length, s);
    return resualt;
};
function recurFun(left, right, len, s) {
    console.log(len);
    if (len === 0 || len === 1) return resualt = true;
    if (s[left] === s[right]) {
        recurFun(left + 1, right - 1, len - 2, s);
    } else {
        return resualt = false;
    }
}
isPalindrome('A mac, a plan, a canal: Panama');
// 思路二，神人的代码，来之leetcode国际版
var isPalindrome = function(input) {
    var start = 0
    var end = input.length - 1
    while (start < end) {
        var s = input.charCodeAt(start)
        var e = input.charCodeAt(end)
    
        if (!isLetter(s)) {
            start++
            continue
        }
        if (!isLetter(e)) {
            end--
            continue
        }
    
        if (toLowerCase(s) !== toLowerCase(e)) {
            return false 
        } 
        start++
        end--
  }
  return true
};

var isLetter = function(code) {
    if (((code >= 48) && (code <= 57))  // numbers
    || ((code >= 65) && (code <= 90))  // uppercase
    || ((code >= 97) && (code <= 122))) {  // lowercase
        return true
    }
    else {
        return false
    }
}

var toLowerCase = function(code) {
    if (code >= 65 && code <= 90) {
        return code + 32    
    }
    else {
        return code
    }
}