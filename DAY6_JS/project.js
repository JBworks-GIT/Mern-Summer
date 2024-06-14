const handleSubmit = (e) =>{
    e.preventDefault();
    console.dir(e.target);
    const name = document.getElementsByTagName("input")[0].value;
    console.log(name);
    const email = document.getElementsByTagName("input")[1].value;
    console.log(email);
    const password = document.getElementsByTagName("input")[2].value;
    console.log(password);
    const phone = document.getElementsByTagName("input")[3].value;
    console.log(phone);

    const valPass = validatePass(password);
    const valTel = validateTel(phone);
    if(valTel){
        console.log("Phone is fine");
    }
    else{
        console.log("error in Phone No");
    }
    if(valPass){
        console.log("pass is fine");
    }
    else{
        console.log("error in pass");
    }

    if(valPass && valTel){
      const body =   document.getElementsByTagName("body")[0];
        body.removeChild(document.getElementsByTagName("form")[0]);
        body.innerHTML=`<div class='card'>
        <h1>Name is ${name}</h1>
        <h1>Email is ${email}</h1>
        <h1>Password is ${password}</h1>
        <h1>Phone no is ${phone}</h1></div>`  
    }


}

    const validatePass = (p) =>{
        const len = (p.length >= 8);
        const upper = () => {
            for (let i = 0; i < p.length; i++) {
              if (p[i] !== p[i].toUpperCase()) {
                return false;
              }
            }
            return true;
        }
        if(len && upper){
            return true;
        }
        else{
            return false;
        }
    }
    const validateTel = (t) =>{
        if(t.length == 10){
            return true;
        }
        else{
            return false;
        }
    }