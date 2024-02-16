const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

const [x, y, w, h] = input.map(Number);

if(x <= parseInt(w/2)){
    console.log(y <= parseInt(h/2) ? 
    (x>=y ? y : x)
    : 
    (x>=h-y ? h-y : x));
}
else {
    console.log(y <= parseInt(h/2) ? 
    (w-x>=y ? y : w-x)
    : 
    (w-x >= h-y ? h-y : w-x));
}
