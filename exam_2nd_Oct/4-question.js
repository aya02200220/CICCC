/*　Write a recursive function called 'reverse' which accepts a string and returns a new string in reverse. */

function reverse(str) {
  return str ? reverse(str.substr(1)) + str[0] : str;
}
console.log(reverse("awesome"));
console.log(reverse("rithmschool"));

//----------------------------------------
console.log("=========== way 2 ===========");
function reverseString(str) {
  if (str === "")
    // 再帰を終了する終了条件
    return "";
  else return reverseString(str.substr(1)) + str.charAt(0);
}
console.log(reverse("awesome"));
console.log(reverse("rithmschool"));

//============================================
function reverseString(str) {
  if (str === "")
    // 再帰を終了する終了条件
    return "";
  else return reverseString(str.substr(1)) + str.charAt(0);
  /*

再帰メソッドの前半
呼び出しが 1 回だけではなく、複数回の呼び出しがネストされることを頭に置いておいてください。

各回の呼び出し:     str === "?"                 reverseString(str.subst(1)) + str.charAt(0)
1 回目の呼び出し – reverseString("Hello")  が  reverseString("ello")       + "h"  を返す
2 回目の呼び出し – reverseString("ello")   が  reverseString("llo")        + "e"  を返す
3 回目の呼び出し – reverseString("llo")    が  reverseString("lo")         + "l"  を返す
4 回目の呼び出し – reverseString("lo")     が  reverseString("o")          + "l"  を返す
5 回目の呼び出し – reverseString("o")      が  reverseString("")           + "o"  を返す

再帰メソッドの後半
if 文の条件を満たすと、一番最後にネストされている呼び出しが返されます。

5 回目の呼び出しが  reverseString("") + "o"      = "o"                          を返す
4 回目の呼び出しが  reverseString("o") + "l"     = "o" + "l"                    を返す
3 回目の呼び出しが  reverseString("lo") + "l"    = "o" + "l" + "l"              を返す
2 回目の呼び出しが  reverserString("llo") + "e"  = "o" + "l" + "l" + "e"        を返す
1 回目の呼び出しが  reverserString("ello") + "h" = "o" + "l" + "l" + "e" + "h"  を返す
*/
}
reverseString("hello");
