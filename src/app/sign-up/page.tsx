"use client";
import React, { useState } from "react";
import "../globals.css";
import axios from "axios";
import { toast } from "sonner";
import Link from "next/link";
import Image from "next/image";
import { FaGoogle, FaMicrosoft, FaApple } from "react-icons/fa6";
import Mail from "../../Components/Mail";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Input } from "../../Components/ui/input";
import { Label } from "../../Components/ui/label";
import "../globals.css";
import signUpImage from "../../../Public/Assets/signupImg.jpg";
import Plus from "../../Components/Plus.jsx";
import Lock from "../../Components/Lock.jsx";
// import { signIn } from "next-auth/react";
import { FaRegUser } from "react-icons/fa";
const SignUp = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [hide, setHide] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const updatedUserInfo = {
      ...userInfo,
    };
    setUserInfo(updatedUserInfo);
    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_URL}/api/sign-up`,
        updatedUserInfo
      );
      if (data.status === 200) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
      console.log(data);
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  };
  console.log(hide);
  return (
    <div className=" lg:w-full lg:px-8 my-auto flex flex-col  mx-auto p-3 lg:p-0 lg:flex-row-reverse lg:min-h-[calc(100vh-50px)]">
      <div className="lg:w-[55%]  ">
        <Image
          alt="logo"
          src={signUpImage}
          placeholder="blur"
          className="rounded-xl h-full "
        />
      </div>
      <div className="text-center flex flex-col lg:w-[30%] mx-auto lg:items-center lg:justify-center  w-full">
        <div className="boder  mt-3 mb-10 flex justify-center  w-full  ">
          <Plus />
        </div>
        <div className="text-white  w-full">
          <h1 className="text-2xl lg:text-5xl font-bold">Sign Up today</h1>
          <p className="text-gray my-2 lg:my-6 lg:text-xl">
            Let{"'"}s get you all set up. Add your details below.
          </p>
          <form
            onSubmit={handleFormSubmit}
            className="space-y-3 lg:space-y-5 mb-3 lg:mb-10 lg:mt-10"
          >
            <div className="text-left relative">
              <Label htmlFor="name" className="lg:text-lg">
                Your Name
              </Label>
              <Input
                type="text"
                className="hover:shadow-md transition-all duration-300  hover:shadow-[#e36a15] rounded-xl outline-none border-none bg-[#24262b] py-6 lg:py-8 lg:text-lg mt-1"
                onChange={(e) =>
                  setUserInfo({ ...userInfo, name: e.target.value })
                }
                required
                onFocus={() => setHide(true)}
                onBlur={() => setHide(false)}
              />
              <FaRegUser
                className={`absolute top-[55%] left-4 h-5 w-5 ${
                  hide ? "hidden" : ""
                }`}
              />
            </div>
            <div className="text-left relative">
              <Label htmlFor="Email" className="lg:text-lg">
                Email Address
              </Label>
              <Input
                type="email"
                required
                className="hover:shadow-md transition-all duration-300  hover:shadow-[#e36a15] rounded-xl outline-none border-none bg-[#24262b] py-6 lg:py-8 lg:text-lg mt-1"
                onChange={(e) =>
                  setUserInfo({ ...userInfo, email: e.target.value })
                }
                onFocus={() => setHide(true)}
                onBlur={() => setHide(false)}
              />
              <Mail hide={hide} />
            </div>
            <div className="text-left relative">
              <Label htmlFor="password" className="lg:text-lg">
                Password
              </Label>
              <Input
                type={showPassword ? "text" : "password"}
                required
                className="hover:shadow-md transition-all duration-300 hover:shadow-[#e36a15] rounded-xl outline-none border-none bg-[#24262b] py-6 lg:py-8 lg:text-lg mt-1"
                onChange={(e) =>
                  setUserInfo({ ...userInfo, password: e.target.value })
                }
                onFocus={() => setHide(true)}
                onBlur={() => setHide(false)}
              />
              <Lock hide={hide} />
              {showPassword ? (
                <FaEyeSlash
                  className="absolute right-4 top-[60%] lg:top-[55%] cursor-pointer lg:h-6 w-6"
                  onClick={() => setShowPassword(!showPassword)}
                />
              ) : (
                <FaEye
                  className="absolute right-4 top-[60%] lg:top-[55%] cursor-pointer lg:h-6 w-6"
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}
            </div>

            <button
              className="btn rounded-xl bg-[#e36a15] w-full outline-none border-none lg:text-lg lg:h-[70px] text-white hover:bg-[#f97316]"
              style={{ marginBottom: "10px" }}
            >
              Sign In{" "}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 12H20"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 5L17.2727 7.63636C17.7448 7.8724 18.1276 8.25519 18.3636 8.72727V8.72727C19.3938 10.7875 19.3938 13.2125 18.3636 15.2727V15.2727C18.1276 15.7448 17.7448 16.1276 17.2727 16.3636L12 19"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            {/* Social button */}
            <div className="flex gap-2 ">
              {/* Google Button */}
              <button
                className="rounded-xl flex-1 border-none outline-none px-8 bg-[#24262b] lg:h-[70px] text-white btn hover:bg-[#24262b]"
                type="button"
                // onClick={() => signIn("google")}
              >
                <FaGoogle className="h-5 w-9 lg:h-[37px] lg:w-[37px]" />
              </button>
              {/* Microsoft Button */}

              <button
                className="rounded-xl flex-1 border-none outline-none px-8 bg-[#24262b] lg:h-[70px] text-white btn hover:bg-[#24262b]"
                type="button"
              >
                <FaMicrosoft className="h-5 w-9 lg:h-[37px] lg:w-[37px]" />
              </button>

              {/* Apple Button */}
              <button
                className="rounded-xl flex-1 border-none outline-none px-8 bg-[#24262b] lg:h-[70px] text-white btn hover:bg-[#24262b]"
                type="button"
              >
                <FaApple className="h-5 w-9 lg:h-[37px] lg:w-[37px]" />
              </button>
            </div>
          </form>
          <span className="text-white lg:text-lg">
            Already have an account?
            <Link href={"/sign-in"} className="text-[#e36a15] underline ">
              {" "}
              Sign In
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
