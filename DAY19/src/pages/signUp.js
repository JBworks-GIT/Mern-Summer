import { useState } from "react";
import useSignUp from "../hooks/useSignUp";

const SignUp = () => {
  const { signUp } = useSignUp();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const validate = () => {
    let validate = true;
    if (validate) {
      signUp({ email, password });
    } else {
      alert("Validation error ......");
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
        <button onClick={validate}>Submit</button>
        <p>Already on Amazon? <a href="">Login</a></p>
      </div>
    </div>
  )
};

export default SignUp;
