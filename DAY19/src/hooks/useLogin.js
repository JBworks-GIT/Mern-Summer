const useLogin = () => {
    const login = async ({email, password}) => {
        console.log("--Login Called --");
      const URL = "http://localhost:3000/api/v1/auth/signup";
      const OPTIONS = {
        method: "POST",
        headers : {
          "content-type" : "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      };
      const res = await fetch(URL, OPTIONS);
      console.log(res);
    };
    return { login };
  };
  
  export default useLogin;
  