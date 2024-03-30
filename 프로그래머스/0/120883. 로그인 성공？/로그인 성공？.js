function solution(id_pw, db) {
    var [id, pw] = id_pw;
    var result = '';
    for(let i = 0 ; i < db.length ; i++){
        var [d,w] = [db[i][0] , db[i][1]];
        if(d === id && w === pw){
            result = "login";
            break;
        }
        else if(d === id && w !== pw){
            result = "wrong pw";
            break;
        }
        else{
            result = "fail"
        }
    }
    return result;
}