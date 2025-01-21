"use client";
import { useState } from "react";
import Container from "@/shared/Container";
import Image1 from "@/images/Partners.png";
import { Josefin_Sans, Lato } from "next/font/google";
import Image from "next/image";
import Hero from "@/shared/HeroShared";
import Link from "next/link";
import { client } from "@/sanity-migration/sanityClient"; // Make sure this path is correct

const josefinFont = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage("Both fields are required.");
      return;
    }

    try {
      // Query to find the user by email
      const query = `*[_type == "signup" && email == $email][0]`;
      const user = await client.fetch(query, { email });

      if (user) {
        // If the user exists, check the password
        if (user.password === password) {
          alert('login successful')
          setSuccessMessage("Login successful!");
          setErrorMessage("");
        } else {
          alert('login failed')
          setErrorMessage("Invalid email or password.");
          setSuccessMessage("");
        }
      } else {
        setErrorMessage("User not found.");
        setSuccessMessage("");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("An error occurred. Please try again.");
      setSuccessMessage("");
    }
  };

  return (
    <>
      <Hero heading="My Account" tittle="Home . Page" text="My Account" />
      <Container className="py-12">
        <div className="flex items-center justify-center">
          <div className="w-full max-w-[544px] h-[474px] mt-16 px-4 shadow-xl flex items-center justify-center">
            <div className="w-full max-w-[433px] h-[374px] flex flex-col justify-between items-center">
              <h2
                className={`${josefinFont.className} text-[32px] leading-[37.5px] text-black text-center`}
              >
                Login
              </h2>
              <p
                className={`${lato.className} font-normal text-[17px] leading-[20.4px] text-[#9096B2] text-center`}
              >
                Please login using account details below.
              </p>

              {errorMessage && (
                <p className="text-red-500 text-[14px] mb-4">{errorMessage}</p>
              )}
              {successMessage && (
                <p className="text-green-500 text-[14px] mb-4">{successMessage}</p>
              )}

              <form onSubmit={handleLogin} className="w-full">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`${lato.className} w-full h-[52px] border border-[#C2C5E1] rounded-[2px] text-[16px] outline-none bg-transparent px-3 leading-[19.2px] text-[#9096B2] mt-4`}
                  placeholder="Email Address"
                  required
                />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`${lato.className} w-full h-[52px] border border-[#C2C5E1] rounded-[2px] text-[16px] outline-none bg-transparent px-3 leading-[19.2px] text-[#9096B2] mt-4`}
                  placeholder="Password"
                  required
                />
                <div className="w-full flex justify-start">
                  <p
                    className={`${lato.className} text-[#9096B2] text-[17px] font-normal leading-[20.4px] cursor-pointer mt-2`}
                  >
                    Forgot your password?
                  </p>
                </div>
                <button
                  type="submit"
                  className={`${lato.className} w-full h-[47px] font-bold text-[17px] leading-[20.4px] bg-accent text-white mt-4`}
                >
                  Sign In
                </button>
                <p
                  className={`${lato.className} text-[#9096B2] text-[17px] font-normal leading-[20.4px] cursor-pointer mt-4`}
                >
                  Don't have an Account? <Link href={"/SignUp"}>Create account</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center pt-40">
          <Image src={Image1} alt="Image1" className="w-[904px]" />
        </div>
      </Container>
    </>
  );
};

export default Login;
