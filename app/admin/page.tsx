"use client";
import { useState } from "react";
import Container from "@/shared/Container";
import Image1 from "@/images/Partners.png";
import { Josefin_Sans, Lato } from "next/font/google";
import Image from "next/image";
import Hero from "@/shared/HeroShared";
const josefinFont = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const AdminPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status

  const adminCredentials = {
    username: "Admin",
    password: "admin123",
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !password) {
      setErrorMessage("Both fields are required.");
      return;
    }

    if (
      username === adminCredentials.username &&
      password === adminCredentials.password
    ) {
      setSuccessMessage("Login successful!");
      setErrorMessage("");
      setIsLoggedIn(true); // Set login status to true
    } else {
      setErrorMessage("Invalid username or password.");
      setSuccessMessage("");
    }
  };

  return (
    <>
      <Hero
        heading={isLoggedIn ? "Admin Main Page" : "Admin Login"}
        tittle="Home . Admin Page"
        text={isLoggedIn ? "Admin Dashboard" : "Admin Login"}
      />
      <Container className="py-12">
        {isLoggedIn ? (
          // <div className="flex items-center justify-center">
          //   <div className="w-full max-w-[544px] mt-16 px-4 shadow-xl flex items-center justify-center">
          //     <div className="w-full max-w-[433px] h-[374px] flex flex-col justify-between items-center">
          //       <h2
          //         className={`${josefinFont.className} text-[32px] leading-[37.5px] text-black text-center`}
          //       >
          //         Welcome to Admin Dashboard
          //       </h2>
          //      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          //      <Link href='/admin/orders'
          //         className={`${lato.className} h-8 max-w-32 bg-blue-900 rounded-lg flex items-center justify-center text-white font-normal text-[17px] leading-[20.4px]  text-center`}
          //       >
          //         Orders
          //       </Link>
          //      <Link href='/admin/addProduct'
          //         className={`${lato.className} h-8 max-w-44 px-4 bg-blue-900 rounded-lg flex items-center justify-center text-white font-normal text-[17px] leading-[20.4px]  text-center`}
          //       >
          //         Add Products
          //       </Link>
          //      </div>
          //       <div className="mt-8">
          //         <p
          //           className={`${lato.className} font-normal text-[17px] text-[#9096B2]`}
          //         >
          //           Admin tools and management features would go here.
          //         </p>
          //       </div>
          //     </div>
          //   </div>
          // </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6">

  <div className="h-[300px] bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 rounded-xl shadow-lg flex items-center justify-center text-xl font-semibold">
    Dashboard
  </div>
  
 
  <div className="h-[300px] grid grid-cols-2 gap-4 bg-gradient-to-r from-[#F939BF] to-[#f954c8] text-white p-6 rounded-xl shadow-lg">
    
    <div className="bg-red-800 rounded-md p-6 flex items-center  justify-center text-lg font-semibold hover:bg-red-700 transition-all duration-300">
      Orders (400)
    </div>
    <div className="bg-yellow-600 rounded-md p-6 flex items-center justify-center text-lg font-semibold hover:bg-yellow-500 transition-all duration-300">
      Pending (280)
    </div>
    <div className="bg-green-600 rounded-md p-6 flex items-center justify-center text-lg font-semibold hover:bg-green-500 transition-all duration-300">
      Dispatch (120)
    </div>
    <div className="bg-blue-600 rounded-md p-6 flex items-center justify-center text-lg font-semibold hover:bg-blue-500 transition-all duration-300">
      Return (0)
    </div>
  </div>
</div>

        ) : (
          <div className="flex items-center justify-center">
            <div className="w-full max-w-[544px] h-[474px] mt-16 px-4 shadow-xl flex items-center justify-center">
              <div className="w-full max-w-[433px] h-[374px] flex flex-col justify-between items-center">
                <h2
                  className={`${josefinFont.className} text-[32px] leading-[37.5px] text-black text-center`}
                >
                  Admin Login
                </h2>
                <p
                  className={`${lato.className} font-normal text-[17px] leading-[20.4px] text-[#9096B2] text-center`}
                >
                  Please login using your admin credentials.
                </p>

                {errorMessage && (
                  <p className="text-red-500 text-[14px] mb-4">
                    {errorMessage}
                  </p>
                )}
                {successMessage && (
                  <p className="text-green-500 text-[14px] mb-4">
                    {successMessage}
                  </p>
                )}

                <form onSubmit={handleLogin} className="w-full">
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className={`${lato.className} w-full h-[52px] border border-[#C2C5E1] rounded-[2px] text-[16px] outline-none bg-transparent px-3 leading-[19.2px] text-[#9096B2] mt-4`}
                    placeholder="Username"
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
                  <button
                    type="submit"
                    className={`${lato.className} w-full h-[47px] font-bold text-[17px] leading-[20.4px] bg-accent text-white mt-4`}
                  >
                    Confirm
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
        <div className="flex items-center justify-center pt-40">
          <Image src={Image1} alt="Image1" className="w-[904px]" />
        </div>
      </Container>
    </>
  );
};

export default AdminPage;
