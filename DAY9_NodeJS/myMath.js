function sum(a=0,b=0){
    return a+b ;
}

function mul(a=1,b=1){
    return a*b;
}

function add2(a){
    const res = sum(a,2);
    return res;
}

function calc(s,...arr){
    let ans;
    if(s == "sum"){
        ans = arr.reduce((acc,elem) => acc+elem);
    }
    else{
        ans = arr.reduce((acc,elem) =>acc*elem);
    }
    return ans;
}

console.log(calc('sum',10,20,30,40)); 
console.log(calc('mul',1,2,3,4)); 

console.log("hello");//keep everything in function block and not in global 
//it will be executed in any other file which imports myMath
module.exports ={add2,mul};




