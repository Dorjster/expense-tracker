import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const Signup = () => {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [repassword, setrePassword] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  // const [followers, setFollowers] = useState("");
  // const [following, setFollowing] = useState("");
  // const [img, setImg] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState({});

  const signupHandler = async () => {
    try {
      //   if (repassword === password) {
      const result = await axios.post("http://localhost:8000/signup", {
        email: email,
        password: password,
        username: username,
        repassword: repassword,
      });
      setUser(result.data);
      console.log(result.data);
      router.push("/");
      //   } else {
      //     setError("Passwords do not match");
      //   }
    } catch (e) {
      console.log(e.response.data);
      setError(e.response.data);
    }
  };

  return (
    <div className="flex w-full">
      <div className=" w-[1120px] h-[1175px] pr-[126px] pl-[522px] flex items-center bg-[white]">
        <div className="flex flex-col items-center w-[384px] h-[486px]  gap-[20px] ">
          <div>
            <img src="/Frame 3.png" alt="" />
          </div>
          <div>
            <h1 className="text-center font-[600] text-[#0F172A] text-[24px] leading-[32px]">
              Create Geld account
            </h1>
            <p className="text-[#334155] text-[16px] leading-[24px]">
              Sign up below to create your Wallet account
            </p>
          </div>
          <div className=" flex flex-col gap-[20px]">
            <input
              className="w-full bg-[#F3F4F6] border-[1px] border-solid border-[#D1D5DB] h-[50px] rounded-[8px] px-[20px] "
              placeholder="Username "
              type="text"
              onChange={(event) => setUsername(event.target.value)}
            ></input>{" "}
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
            <input
              className="w-full bg-[#F3F4F6] border-[1px] border-solid border-[#D1D5DB] h-[50px] rounded-[8px] px-[20px] "
              placeholder="Re-password "
              type="password"
              onChange={(event) => setrePassword(event.target.value)}
            ></input>
          </div>
          <div className="flex flex-col items-center gap-[30px]">
            <button
              onClick={signupHandler}
              className="bg-[#0166FF] px-[164px] py-[8px] rounded-xl text-[white] "
            >
              Sign up
            </button>
            <div className="flex gap-[10px]">
              <p> Already have account?</p>
              <Link href="/">
                {" "}
                <button className="text-[#0166FF]">Log in </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1120px] h-[1175px] bg-[#0166FF]"></div>
    </div>
  );
};

export default Signup;
