function solution(my_string) {
    var vowel = [ "a", "e", "i", "o", "u"];
    return my_string.split("").filter((v) => vowel.indexOf(v) === -1).join("");
}