import { useContext } from "react";
import AppContext from "../context/appContext";
const useLogin = () => {
  const { appLogin } = useContext(AppContext);
  const login = async ({ email, password }) => {
    try {
      console.log("--Login Called --");
      const URL = "http://localhost:3000/api/v1/auth/login";
      const OPTIONS = {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      };
      const res = await fetch(URL, OPTIONS);
      const data = await res.json();

      if (data.status === "Success") {
        appLogin(true);
      } else {
        console.log(data);
        alert("Error", data.message);
      }
    } catch (err) {
      console.log(err);
      alert(err.message);
    }
  };
  return { login };
};
export default useLogin;
