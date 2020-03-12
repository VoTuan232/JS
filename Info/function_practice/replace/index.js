/*
    var newStr = str.replace(regexp|substr, newSubstr|function)
    regexp (pattern)
        A RegExp object or literal. The match or matches are replaced with newSubStr or the value returned by the specified function.
    substr (pattern)
        A String that is to be replaced by newSubStr. It is treated as a verbatim string and is not interpreted as a regular expression. 
        Only the first occurrence will be replaced.
    newSubStr (replacement)
        The String that replaces the substring specified by the specified regexp or substr parameter. 
        A number of special replacement patterns are supported; see the "Specifying a string as a parameter" section below.
    function (replacement)
        A function to be invoked to create the new substring to be used to replace the matches to the given regexp or substr. 
        The arguments supplied to this function are described in the "Specifying a function as a parameter" section below.

        Arguments:
        match	Chuỗi con phù hợp
        p1, p2, ...	The nth string found by a parenthesized capture group, provided the first argument to replace() was a RegExp object. 
        offset	The offset of the matched substring within the whole string being examined. 
            (For example, if the whole string was 'abcd', and the matched substring was 'bc', then this argument will be 1.)
        string	The whole string being examined.
*/

function replacer(match, p1, p2, p3, offset, string) {
    console.log(match) // abc12345#$*%
    console.log(p1); // abc
    console.log(p2); // 12345
    console.log(p3); // #$*%
    console.log(offset) /// 0
    console.log(string) // abc12345#$*%
    // p1 is nondigits, p2 digits, and p3 non-alphanumerics
    return [p1, p2, p3].join(' - ');
}
var newString = 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
// console.log(newString);  // abc - 12345 - #$*%

console.log('abc12345#$*%'.match(/([^\d]*)(\d*)([^\w]*)/))