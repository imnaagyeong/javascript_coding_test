function solution(str_list) {
    var index_l = str_list.indexOf("l");
    var index_r = str_list.indexOf("r");
    
    if(index_l === index_r){
        return [];
    }
    else if(index_l === -1){
        return str_list.slice(index_r+1);
    }
    else if(index_r === -1){
        return str_list.slice(0,index_l);
    }
    else if(index_l < index_r){
        return str_list.slice(0,index_l);
    }
    else{
        return str_list.slice(index_r+1);
    }
    
}