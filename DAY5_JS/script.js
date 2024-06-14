// let age = 18;
// console.log(typeof(age));

// let username1= "Jai";
// let username2 = "bhatia";

// let n = username1 + ' ' + username2;

// let a = username1 +10;

// let b = 10+ username1;

// let c = username1 -10;

// console.log(a);
// console.log(b);
// console.log(c);


// let r = 10 + 12 + 14 + "Hello";
// console.log(r);
// console.log(typeof(r));



// let v1 = 'hello';

// let v2 = 'hello';

// if(v1==v2){
//     console.log("YES");
// }
// else{
//     console.log("No");
// }


// if(v1===v2){
//     console.log("YES");
// }
// else{
//     console.log("No");
// }



let u1 = 'Jai';
let u2 = 'Bhatia';

let ans1 = u1 + ' ' + u2;
let ans2 = `${u1} ${u2}`;

console.log(ans1);
console.log(ans2);


//functions


function printHello(){
    console.log("Hello");
}

printHello();

// named function assignment
const pH = function printHello(){//no use of printHello here 
    console.log("Hello");
}

pH();


// anonymous function assignment
const pHi = function (){
    console.log("Helloo");
}

pHi();

// arrow function assignment

const pHii =  () =>{
    console.log("Hellooo");
}

pHii(); 

function sum(a,b){
    if(a === undefined){
        console.log(0);
    }
    else if(b!==undefined){
        console.log(a+b);
    }
    else{
        console.log(a);
    }
} 


const obj1 = new Object();
const obj2 = {};

obj1.name = "jai";
obj2.name = "wdsdf"

console.log(obj1);
console.log(obj2);

const obj = {
    name: "ads",
    "age" : 20,
    10 : "ten",
    "city" :"Jaipur",
    'ten' : 20,
    20 :200,
}
console.log(obj.name);
console.log(obj["name"]);
console.log(obj[20]);// to access dynamically


const input = prompt();
console.log(obj[input]);

const vr = "city";
console.log(obj[vr]);


const arr = ["arr","two",100];//any value can be given

//object whose all keys are numbers then it is an array





// shallow copy o2 and o1 share same address
//only for case of non primitive types as they are mutable
// let o1={
//     name : 'jai',
//     age: 10
// }
// const o2= o1;

// o2.name = "bha";

// console.log(o1);
// console.log(o2);



// did not happen bc it is primitive and non mutable
let v1 = "jai";

let v2 = v1;

v2 = "name";

console.log(v1);
console.log(v2);





// const arr2 = ["Fruits","apple","banaa","mango"]
// for (let i=0;i<4;i++){
//     console.log(arr2[i]);
// }

// for (let i in arr2){
//     console.log(i);
// }
// for (let i of arr2){
//     console.log(i);
// }



//for object for of does not work
const arr2 = {o1:"Fruits",o2:"apple",o3:"banaa",o4:"mango"}
for (let i=0;i<4;i++){
    console.log(arr2[i]);
}

for (let i in arr2){
    console.log(i);
}
// for (let i of arr2){
//     console.log(i);
// }




//order does not matter in object
const obj4 = {
    id: "2323244232",
    name: "me",
    3: "three"
}
for (let i=0;i<4;i++){
    console.log(obj4[i]);
}

//to print value of object
for (let i in  obj4){
    console.log(i , obj4[i]);
}



console.dir(document)