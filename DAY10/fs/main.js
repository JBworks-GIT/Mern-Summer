const fs = require("fs");
// 2 ways to translate 

// // 1>>
// console.log("Start");
// const data1  = fs.readFileSync("./text.txt");//it blocks code until this is completed
// console.log(data1.toString());
// console.log("mid");
// // 2>>
// const data  = fs.readFileSync("./text.txt",{encoding: "utf8"});//it blocks code until this is completed
// console.log(data);
// console.log("End");




// fs.readFile('./text.txt',{encoding: "utf8"},(err,data)=>{ //does not block 
//     if(err) console.log("Error occured",err);
//     else console.log(data);
// })
// console.log("end");





// console.log("start");
// fs.writeFileSync("./new.txt","custom text from NodeJS")
// console.log("end");



// console.log("start");
// fs.writeFile("./new.txt","custom text from NodeJS",(err,data)=>{
//     console.log(err,data);
// })

// console.log("end");



const fsPromises= require("fs/promises");
// console.log("Start");
// fsPromises.readFile('./text.txt',{encoding : "utf8"}).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log("Error : " ,err);
// })

// console.log("end");



// fsPromises.writeFile("./textFileWrite","Dummy text\n").then(()=>{
//     console.log("Write DOne");
// }).catch((err)=>{
//     console.log(err);
// })


// fsPromises.appendFile("./textFileAppend","Dummy text\n").then(()=>{
//     console.log("Append DOne");
// }).catch((err)=>{
//     console.log(err);
// })



// my try
// fsPromises.readFile("./data.json",{encoding : "utf8"}).then((da)=>{
//     let mathScores = 0;
//     console.log(da);
//     for(let i = 0;i<da.length;i++){
//         mathScores += da[i].MathsScore;
//     }
//     console.log(mathScores);
// }).catch((err)=>{
//     console.log(err);
// })


//sir
// const pr = fsPromises.readFile("./data.json",{encoding : "utf8"});
// pr.then((text)=>{
//     const arr = JSON.parse(text);
//     console.log(arr);
//     let mt =0;
//     for(let i=0;i<arr.length;i++){
//         mt+= arr[i].MathsScore;
//     }
//     console.log(mt);
// })
// .catch(console.log);

function getObjectById(id,arr){
    arr.find(id){
        return ;
    }
}

const pr = fsPromises.readFile("./data.json",{encoding : "utf8"});
pr.then((text)=>{
    const arr = JSON.parse(text);
    console.log(arr);

    const obj = getObjectById(23,arr);
    console.log(obj);
})
.catch(console.log);
