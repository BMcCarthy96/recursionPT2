/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/

function reverse(str) {
    if (str.length === 0) return "";
    //let strLength = str.length - 1
    //if (strLength === 1) return str
    // strLength++
    return (
        str.charAt(str.length - 1) + reverse(str.substring(0, str.length - 1))
    );
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
    module.exports = reverse;
} catch (e) {
    module.exports = null;
}
