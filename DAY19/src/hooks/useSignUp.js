const useSignUp = () => {
  const signUp = async ({email, password}) => {
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
  return { signUp };
};

export default useSignUp;
