// const s2 = document.getElementsByTagName("section");
// const secondSection = s2[1];
// const title = secondSection.getElementsByTagName("h4");
// title[0].innerText = "Js callbacks"

// const title = document.getElementsByTagName("section")[1].getElementsByTagName("h4")[0].innerText = "mew";

// const enew = document.querySelector("section>h4:first-child");

// enew.style.color = "blue";

// enew.className = "cs1";

// enew.setAttribute('class' , 'cs22');

// const pr = document.createElement("p");
// pr.innerText = "new line by dom";

// const sec = document.getElementsByTagName('section')[0];

// sec.appendChild(pr);

// sec.removeChild(pr);

// function printHello() {
//   console.log("hello...");
// }

// function inputClicked() {
//   console.log("inputClicked...");
// }

// function inputKeyDown(e) {
//     console.log("inputKeyDown" , e.target.value);
//   }
//   function inputKeyUp(e) {
//     console.log("inputKeyUp" , e.target.value);
//   }

//   function inputKeyChanged(e) {
//     console.log("inputKeyChanged", e.target.value);
//   }


// function handleUserName(e){
// console.log("Name is " , e.target.value);    
// }
// function handleUserAge(e){
//     console.log("Age is " , e.target.value);    
//     }


    // function handleSubmit(e){
    //     e.preventDefault();
    //     console.log("clicked on submit" , e.target);
    //     const userName = e.target[0].value;
    //     const userAge = e.target[1].value;
    //     console.log(userName , userAge);

    //     if(userAge<30){
    //         document.body.append("Validation succesful");
    //     }
    //     else{
    //         document.body.append("enter less age");
    //     }
    // }



    const handleSubmit = (e)=>{
        e.preventDefault();
        const arr = e.target;
        console.dir(arr);

        const name = arr[0].value;
        const email = arr[1].value;


        const form = document.getElementsByTagName("form")[0];
        form.style.display = "none";
        console.log(name , email);
        renderCard(name , email);
    }

    const renderCard = (n , e)=>{
        const root = document.getElementById("root");
        root.setAttribute('class' , 'card');

        // root.innerHTML = n + ' ' + e;
        root.innerHTML = `
        <h3 class = "name">name is : ${n}</h3> 
        <h1 class = "email"> Email  is :${e}</h1>`;
    }


    // const showResult = (e) =>{
    //     console.log(e);
    //     const root = document.getElementById("root");
    //     root.innerText = e;
    // }

    // const printPreety = (e) =>{
    //     const root = document.getElementById("root");
    //     root.style.color = "green"
    //     root.innerText = e;
    // }
    // const sum = (a,b) =>{
    //     const res = a+b;
    //     showResult(res);
    // }
    // const mul = (a,b) =>{
    //     const res = a*b;
    //     printPreety(res);
    // }

    // const showResult = (e) =>{
    //     console.log(e);
    //     const root = document.getElementById("root");
    //     root.innerText = e;
    // }

    // const printPreety = (e) =>{
    //     const root = document.getElementById("root");
    //     root.style.color = "green"
    //     root.innerText = e;
    // }
    // const sum = (a,b,fn) =>{
    //     const res = a+b;
    //     fn(res);
    // }
    // const rr = sum(20,20,printPreety);


























    // function payWithRazorpay () {
    //     console.log("Payment with Razorpay");
    // }
    // function payWithPaytm () {
    //     console.log("Payment with Paytm");
    // }
    
    // const userDetails = (name,age,seat,processPayment) =>{
    //     console.log(`Booking with ${name} whose age is ${age}`);

    //     if(true){
    //         processPayment();
    //     }
    //     else
    //     {
    //         console.log("error");
    //     }
    // }

    // userDetails("jai",10,"sl",payWithRazorpay);




// const arr = [10,20,30];
// let a = arr.shift(); //change orignal array
// console.log(a);
// console.log(arr);

// arr.unshift("12");
// console.log(arr);

// arr.pop();
// console.log(arr);

// arr.push("43");
// console.log(arr);



// const arr = ["fruits","apple","mango"];

// const printValues = (a,b,c)=>{
//     console.log(`value is ${a}`);
//     console.log(`index is ${b}`);
//     console.log(`arr is ${c}`);
// }

// for(let i = 0;i<arr.length; i++){
//     printValues(arr[i],i,arr);
// }

// arr.forEach(printValues);



const words = ['happy','square','confidence','mystery','scale','joyous'];

const cb = (x) =>{
    if(x.length>5) return false;
    else return true;
}


const res = words.filter(cb);

console.log(res);















