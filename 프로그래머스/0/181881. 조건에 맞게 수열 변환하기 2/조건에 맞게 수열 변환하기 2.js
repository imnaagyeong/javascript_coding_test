function solution(arr) {
    var result = 0;
    while(1){
        var next = arr.map((v)=> v >= 50 && v % 2 === 0 ? v /2 : v<50 && v % 2 === 1 ? 2*v+1 : v);
        if(arr.filter((v,i) => v !== next[i]).length === 0){
            break;
        }
        else{
            arr = next;
            result++;
        }
        
    }
    
    return result;
}