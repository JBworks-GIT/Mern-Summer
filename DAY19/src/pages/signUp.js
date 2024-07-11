import { useState } from "react";
import useSignUp from "../hooks/useSignUp";

const SignUp = () => {
  const { signUp } = useSignUp();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const validate = () => {
    const validate1 = email.length>4;
    const validate2 = email.length>=8;
    if (validate1 && validate2) {
      signUp({ email, password });
    } else if(!validate1){
      alert("Error in Email");
    }
    else{
      alert("passowrd is less than 7 chars");
    }
  };

  return (
    <div className="Container-Main">
      <h1>Sign Up Page</h1>
      <div className="Container-inner">
        <h2>Enter Email</h2>
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <h2>Enter Password</h2>
        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={validate}>Sign Up</button>
        <p>Already on Amazon? <a href="./login">Login</a></p>
      </div>
    </div>
  )
};

export default SignUp;
