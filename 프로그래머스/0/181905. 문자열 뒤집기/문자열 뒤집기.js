function solution(my_string, s, e) {
    const str = my_string.slice(s,e+1).split("").reverse()
    return my_string.slice(0,s) + str.join("") + my_string.slice(e+1);
}