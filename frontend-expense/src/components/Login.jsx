import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState({});

  const loginHandler = async () => {
    try {
      const result = await axios.post("http://localhost:8000/login", {
        email: email,
        password: password,
      });

      // if (result.data.success) {
      setUser(result.data);
      console.log(result.data);
      // console.log(result.data.token);

      localStorage.setItem("loginToken", JSON.stringify(result.data.token));
      router.push("/next");
      // } else {
      //   setError(result.response.message);
      // }
    } catch (e) {
      console.log(e.response.data);
      setError(e.response.data);
    }
  };
  return (
    <div className="flex flex-col items-center w-[384px] h-[486px]  gap-[20px] ">
      <div>
        <img src="/Frame 3.png" alt="" />
      </div>
      <div>
        <h1 className="text-center font-[600] text-[#0F172A] text-[24px] leading-[32px]">
          Welcome Back
        </h1>
        <p className="text-[#334155] text-[16px] leading-[24px]">
          Welcome back, Please enter your details
        </p>
      </div>
      <div className=" flex flex-col gap-[20px]">
        {" "}
        <input
          className="w-[384px] bg-[#F3F4F6] border-[1px] border-solid border-[#D1D5DB] h-[50px] rounded-[8px] px-[20px]"
          placeholder="Email"
          type="text"
          onChange={(event) => setEmail(event.target.value)}
        ></input>
        <input
          className="w-full bg-[#F3F4F6] border-[1px] border-solid border-[#D1D5DB] h-[50px] rounded-[8px] px-[20px] "
          placeholder="Password "
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        ></input>
      </div>
      <div className="flex flex-col items-center gap-[30px]">
        <button
          onClick={loginHandler}
          className="bg-[#0166FF] px-[170px] py-[8px] rounded-xl text-[white]"
        >
          Log in
        </button>
        <div className="flex gap-[10px]">
          <p> Don't have an account?</p>
          <Link href="/Signup">
            {" "}
            <button className="text-[#0166FF]">Sign up</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
