// const student= {
//     userName: 'Aman',
//     rollNo: '24001',
//     city: "delhi",
//     hobbies:["Painting","Styling","drawing"],
// }
// console.log(student.userName);
// const {userName,city} = student; //destructure a object

// console.log(userName,city);



// const fruits = ["Banana" , "Apple" , "Orange"];
// console.log(fruits[0]);
// const [,i2,i3]  = fruits;

// console.log(i2,i3);


// const student= {
//     userName: 'Aman',
//     rollNo: '24001',
//     city: "delhi",
//     hobbies:["Painting","Styling","drawing"],
// }

// const {hobbies} = student;
// hobbies[0] = 'studying';

// console.log(hobbies);
// console.log(student);


//rest ----> to pack all values
//spread -----> to unpack all values

// const s1= {
//     userName: 'Aman',
//     rollNo: '24001',
//     city: "delhi",
//     hobbies:["Painting","Styling","drawing"],
// }


// const s2 = s1;//because both are non primitive both values are changed at same time
// //shallow copy
// s2.userName = 'Ajay';

// console.log(s1);
// console.log(s2);


const s3= {
    userName: 'Aman',
    rollNo: '24001',
    city: "delhi",
    hobbies:["Painting","Styling","drawing"],
}

//spread operator
const s4 = {...s3};//unpack all s3 and and create a newobject of s4 and both have different addresses and assign all values of s3 in s4
//shallow copy
s3.userName = 'Ajay';
s4.hobbies[0] = 'playing';  // non primitive so it changes for both as hobbies is pointed by both objects s3 and s4
console.log(s3);
console.log(s4);






function sum(...a){
    const res = a.reduce((acc,a,b,c,d)=>{
        console.log(acc,a,b,c,d);
        return acc+a;
    },0) //0 to give default value  
    // acc is accumalator to store sum of previous values and automatically takes up first value if not provided in this case(3)
    console.log("---> " , res);
}









// sum() // --->0
// sum(10) // --->10
// sum(10,20) // --->30
// sum(3,4,7,8); // --->31
// sum(1,2,10,4) // --->17
// sum(2,4,5,10,2) // --->23










// console.log("start");

// async function getData(){
//     console.log("inside");
//     const res  = await fetch("https://dummyjson.com/products");
//     console.log("step1");
//     const data = await res.json();
//     console.log(data); 
// }

// getData();
// console.log("end");


const ans = [1,2,3,4,5].map(console.log);