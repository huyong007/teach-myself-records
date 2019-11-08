/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    let midLevel = s.length % 2 ? Math.floor((s.length / 2)) : s.length / 2;

    function recurFun(s, level) {
        if (level === midLevel) {
            return s;
        }
        [s[level, s[s.length - 1 - level]]] = [s[s.length - 1 - level], s[level]];
        if (level < midLevel) return recurFun(s, level + 1);
    }
    return recurFun(s, 0);
};

reverseString(["h", "e", "l", "l", "o"]);