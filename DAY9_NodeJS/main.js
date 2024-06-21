// const {add2,mul} = require("./myMath.js")

// const res = add2(29);
// const re = mul(29,10);

// console.log(res,re);




const figlet = require('figlet');

figlet("Sunny",(err,data)=>{
    if(err){
        console.log(err);
    }
    else
    console.log(data);
})