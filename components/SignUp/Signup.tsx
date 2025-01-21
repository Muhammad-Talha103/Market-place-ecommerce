"use client";
import React, { useState } from "react";
import Container from "@/shared/Container";
import Image1 from "@/images/Partners.png";
import { Josefin_Sans, Lato } from "next/font/google";
import Image from "next/image";
import Hero from '@/shared/HeroShared';
import { client } from '@/sanity/lib/client';  // Import the Sanity client
import Link from "next/link";

const josefinFont = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const emailQuery = `*[_type == "signup"]{
  email
}`;

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [emails, setEmails] = useState<string[]>([]);  // Store existing emails

  // Fetch existing emails from the Sanity database when the component mounts
  React.useEffect(() => {
    const fetchEmails = async () => {
      try {
        const result = await client.fetch(emailQuery);
        const existingEmails = result.map((doc: any) => doc.email);
        setEmails(existingEmails);  // Store emails in state
      } catch (error) {
        console.error("Error fetching emails:", error);
      }
    };
    fetchEmails();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }
    if (!termsAccepted) {
      setErrorMessage("You must accept the terms and conditions.");
      return;
    }
    if (emails.includes(email)) {
      setErrorMessage("This email is already registered.");
      return;
    }

    try {
      // Push data to Sanity
      const res = await client.create({
        _type: "signup", // Sanity document type
        fullName,
        email,
        password, // Note: Avoid saving passwords directly in production
        termsAccepted,
      });

      // Reset form fields upon success
      setFullName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setTermsAccepted(false);
      setErrorMessage(""); // Reset any error messages

      alert("User signed up successfully");
      // Optionally, redirect the user to a different page after successful signup
    } catch (error) {
      setErrorMessage("An error occurred while signing up. Please try again.");
      alert("Error during signup");
    }
  };

  return (
    <>
      <Hero heading="Create Account" tittle="Home . Page" text="Signup" />
      <Container className="py-12">
        <div className="flex items-center justify-center">
          <div className="w-full max-w-[544px] h-[574px] mt-16 px-4 shadow-xl flex items-center justify-center">
            <div className="w-full max-w-[433px] h-[474px] flex flex-col justify-between items-center">
              <h2
                className={`${josefinFont.className} text-[32px] leading-[37.5px] text-black text-center`}
              >
                Sign Up
              </h2>
              <p
                className={`${lato.className} font-normal text-[17px] leading-[20.4px] text-[#9096B2] text-center`}
              >
                Create an account by filling in the details below.
              </p>
              {errorMessage && (
                <p className="text-red-500 text-[14px] mb-4">{errorMessage}</p>
              )}
              <form onSubmit={handleSubmit} className="w-full">
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className={`${lato.className} w-full h-[52px] border border-[#C2C5E1] rounded-[2px] text-[16px] outline-none bg-transparent px-3 leading-[19.2px] text-[#9096B2] mt-4`}
                  placeholder="Full Name"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`${lato.className} w-full h-[52px] border border-[#C2C5E1] rounded-[2px] text-[16px] outline-none bg-transparent px-3 leading-[19.2px] text-[#9096B2] mt-4`}
                  placeholder="Email Address"
                />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`${lato.className} w-full h-[52px] border border-[#C2C5E1] rounded-[2px] text-[16px] outline-none bg-transparent px-3 leading-[19.2px] text-[#9096B2] mt-4`}
                  placeholder="Password"
                />
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className={`${lato.className} w-full h-[52px] border border-[#C2C5E1] rounded-[2px] text-[16px] outline-none bg-transparent px-3 leading-[19.2px] text-[#9096B2] mt-4`}
                  placeholder="Confirm Password"
                />
                <div className="w-full flex justify-start mt-2">
                  <input
                    type="checkbox"
                    checked={termsAccepted}
                    onChange={() => setTermsAccepted(!termsAccepted)}
                  />
                  <label
                    className={`${lato.className} text-[#9096B2] text-[17px] font-normal leading-[20.4px] ml-2`}
                  >
                    I accept the Terms & Conditions
                  </label>
                </div>
                <div className="w-full flex justify-start">
                  <p
                    className={`${lato.className} text-[#9096B2] text-[17px] font-normal leading-[20.4px] cursor-pointer mt-2`}
                  >
                    Already have an account?<Link href={"./login"}>Login</Link> 
                  </p>
                </div>
                <button
                  type="submit"
                  className={`${lato.className} w-full h-[47px] font-bold text-[17px] leading-[20.4px] bg-accent text-white mt-4`}
                >
                  Sign Up
                </button>
              </form>
              <p
                className={`${lato.className} text-[#9096B2] text-[17px] font-normal leading-[20.4px] cursor-pointer mt-4`}
              >
                By signing up, you agree to our Terms & Conditions
              </p>
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

export default Signup;
