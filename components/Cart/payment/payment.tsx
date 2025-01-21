import Container from "@/shared/Container";
import Image from "next/image";
import Image1 from "@/images/ProductsDetailsImg3.png";
import { Josefin_Sans, Lato } from "next/font/google";
import Hero from "@/shared/HeroShared";
const josefinFont = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Payment = () => {
  return (
    <>
      <Hero heading="Hekto Demo" />
    <Container className="py-12">
      <div className="w-full h-auto lg:h-[970px]   flex flex-col lg:flex-row items-center justify-between">
        <div className="w-full lg:w-[770px] h-full bg-[#F8F8FD]   flex items-center justify-center">
          <div className="w-full lg:w-[709px] h-[791px] flex flex-col justify-between px-4 lg:px-0">
            <div className="flex items-center w-full h-[20px] justify-between">
              <h2
                className={`${josefinFont.className} text-[18px] text-[#1D3178] leading-[21.8px]`}
              >
                {" "}
                Contact Information
              </h2>
              <p
                className={`${lato.className} font-medium text-[14px] hidden sm:block leading-[16.8px] tracking-[1px] text-[#C1C8E1]`}
              >
                Already have an account?{" "}
                <span className="cursor-pointer hover:text-accent">Log in</span>
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                className={`${lato.className} font-bold text-[14px] outline-none bg-transparent py-4 border-b-[#BFC6E0] text-[#C1C8E1] px-3 border-b leading-[16.8px] tracking-[2px]`}
                placeholder="Email or mobile phone number"
              />
              <div className="flex gap-2 items-center px-3">
                <span className="h-[8px] w-[8px] rounded-[2px] bg-[#19D16F]" />
                <p
                  className={`${lato.className} text-[#8A91AB] tracking-[2px] text-[12px] leading-[14.4px]`}
                >
                  Keep me up to date on news and excluive offers
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <h2
                className={`${josefinFont.className} text-[18px] text-[#1D3178] `}
              >
                Shipping address
              </h2>
              <div className="flex flex-col xsm:flex-row w-full justify-between gap-8 lg:gap-0">
                <input
                  type="text"
                  className={`${lato.className} w-full lg:w-[336px] outline-none bg-transparent px-3 py-2 border-b-[2px] rounded-[2px] border-b-[#BFC6E0] text-[14px] text-[#C1C8E1] font-medium leading-[16.8px]`}
                  placeholder="First name (optional)"
                />
                <input
                  type="text"
                  className={`${lato.className} w-full lg:w-[336px] outline-none bg-transparent px-3 py-2 border-b-[2px] rounded-[2px] border-b-[#BFC6E0] text-[14px] text-[#C1C8E1] font-medium leading-[16.8px]`}
                  placeholder="Last name"
                />
              </div>
              <input
                type="text"
                className={`${lato.className} w-full lg:w-[708px] outline-none bg-transparent px-3 py-2 border-b-[2px] rounded-[2px] border-b-[#BFC6E0] text-[14px] text-[#C1C8E1] font-medium leading-[16.8px]`}
                placeholder="Address"
              />
              <input
                type="text"
                className={`${lato.className} w-full lg:w-[708px] outline-none bg-transparent px-3 py-2 border-b-[2px] rounded-[2px] border-b-[#BFC6E0] text-[14px] text-[#C1C8E1] font-medium leading-[16.8px]`}
                placeholder="Appaetnentment,suit,e.t.c (optinal)"
              />
              <input
                type="text"
                className={`${lato.className} w-full lg:w-[708px] outline-none bg-transparent px-3 py-2 border-b-[2px] rounded-[2px] border-b-[#BFC6E0] text-[14px] text-[#C1C8E1] font-medium leading-[16.8px]`}
                placeholder="City"
              />
              <div className="flex flex-col xsm:flex-row w-full justify-between gap-8 lg:gap-0">
                <input
                  type="text"
                  className={`${lato.className} w-full lg:w-[336px] outline-none bg-transparent px-3 py-2 border-b-[2px] rounded-[2px] border-b-[#BFC6E0] text-[14px] text-[#C1C8E1] font-medium leading-[16.8px]`}
                  placeholder="Bangladesh"
                />
                <input
                  type="text"
                  className={`${lato.className} w-full lg:w-[336px] outline-none bg-transparent px-3 py-2 border-b-[2px] rounded-[2px] border-b-[#BFC6E0] text-[14px] text-[#C1C8E1] font-medium leading-[16.8px]`}
                  placeholder="Postal Code"
                />
              </div>
            </div>
            <button
              className={`${lato.className} bg-accent w-[183px] h-[44px] rounded-[2px] text-[16px] text-white leading-[18.75px] `}
            >
              Continue Shipping
            </button>
          </div>
        </div>
        <div className="w-full lg:w-[369px] mt-5 px-2 h-full flex flex-col gap-14  justify-between">
        
            <div className="h-auto lg:h-[102px] w-full">
                      <div className="flex flex-col ">
                      <div className="flex flex-col justify-end">
                <div className="flex justify-between items-center px-3">
                  <div className="flex  gap-2 items-center">
                    <Image
                      src={Image1}
                      alt="Image1"
                      className="w-[83px] h-[87px] "
                    />
                    <div className="flex flex-col gap-2">
                      <h3
                        className={`${josefinFont.className} text-[#000000] text-[14px] leading-[16.2px] `}
                      >
                        Ut diam consequat
                      </h3>
                      <p
                        className={`${josefinFont.className} mt-2 text-[12px] text-[#A1A8C1] leading-[14.2px]`}
                      >
                        Color:{" "}
                        <span className="text-[14px] leading-[16.2px]">
                          Brown
                        </span>
                      </p>
                      <p
                        className={`${josefinFont.className} text-[12px] text-[#A1A8C1] leading-[14.2px]`}
                      >
                        Size:{" "}
                        <span className="text-[14px] leading-[16.2px]">XL</span>
                      </p>
                    </div>
                                  </div>
                                  <p className={`${josefinFont.className} text-[#15245E] text-[14px] leading-[16.2px]`}>$32.00</p>
                </div>
                <span className="h-[1px] w-full bg-[#E1E1E4] my-5 opacity-50" />
              </div>
              <div className="flex flex-col justify-end">
                <div className="flex justify-between items-center px-3">
                  <div className="flex  gap-2 items-center">
                    <Image
                      src={Image1}
                      alt="Image1"
                      className="w-[83px] h-[87px] "
                    />
                    <div className="flex flex-col gap-2">
                      <h3
                        className={`${josefinFont.className} text-[#000000] text-[14px] leading-[16.2px] `}
                      >
                        Ut diam consequat
                      </h3>
                      <p
                        className={`${josefinFont.className} mt-2 text-[12px] text-[#A1A8C1] leading-[14.2px]`}
                      >
                        Color:{" "}
                        <span className="text-[14px] leading-[16.2px]">
                          Brown
                        </span>
                      </p>
                      <p
                        className={`${josefinFont.className} text-[12px] text-[#A1A8C1] leading-[14.2px]`}
                      >
                        Size:{" "}
                        <span className="text-[14px] leading-[16.2px]">XL</span>
                      </p>
                    </div>
                                  </div>
                                  <p className={`${josefinFont.className} text-[#15245E] text-[14px] leading-[16.2px]`}>$32.00</p>
                </div>
                <span className="h-[1px] w-full bg-[#E1E1E4] my-5 opacity-50" />
              </div>
              <div className="flex flex-col justify-end">
                <div className="flex justify-between items-center px-3">
                  <div className="flex  gap-2 items-center">
                    <Image
                      src={Image1}
                      alt="Image1"
                      className="w-[83px] h-[87px] "
                    />
                    <div className="flex flex-col gap-2">
                      <h3
                        className={`${josefinFont.className} text-[#000000] text-[14px] leading-[16.2px] `}
                      >
                        Ut diam consequat
                      </h3>
                      <p
                        className={`${josefinFont.className} mt-2 text-[12px] text-[#A1A8C1] leading-[14.2px]`}
                      >
                        Color:{" "}
                        <span className="text-[14px] leading-[16.2px]">
                          Brown
                        </span>
                      </p>
                      <p
                        className={`${josefinFont.className} text-[12px] text-[#A1A8C1] leading-[14.2px]`}
                      >
                        Size:{" "}
                        <span className="text-[14px] leading-[16.2px]">XL</span>
                      </p>
                    </div>
                                  </div>
                                  <p className={`${josefinFont.className} text-[#15245E] text-[14px] leading-[16.2px]`}>$32.00</p>
                </div>
                <span className="h-[1px] w-full bg-[#E1E1E4] my-5 opacity-50" />
              </div>
              <div className="flex flex-col justify-end">
                <div className="flex justify-between items-center px-3">
                  <div className="flex  gap-2 items-center">
                    <Image
                      src={Image1}
                      alt="Image1"
                      className="w-[83px] h-[87px] "
                    />
                    <div className="flex flex-col gap-2">
                      <h3
                        className={`${josefinFont.className} text-[#000000] text-[14px] leading-[16.2px] `}
                      >
                        Ut diam consequat
                      </h3>
                      <p
                        className={`${josefinFont.className} mt-2 text-[12px] text-[#A1A8C1] leading-[14.2px]`}
                      >
                        Color:{" "}
                        <span className="text-[14px] leading-[16.2px]">
                          Brown
                        </span>
                      </p>
                      <p
                        className={`${josefinFont.className} text-[12px] text-[#A1A8C1] leading-[14.2px]`}
                      >
                        Size:{" "}
                        <span className="text-[14px] leading-[16.2px]">XL</span>
                      </p>
                    </div>
                                  </div>
                                  <p className={`${josefinFont.className} text-[#15245E] text-[14px] leading-[16.2px]`}>$32.00</p>
                </div>
                <span className="h-[1px] w-full bg-[#E1E1E4] my-5 opacity-50" />
              </div>
              <div className="flex flex-col justify-end">
                <div className="flex justify-between items-center px-3">
                  <div className="flex  gap-2 items-center">
                    <Image
                      src={Image1}
                      alt="Image1"
                      className="w-[83px] h-[87px] "
                    />
                    <div className="flex flex-col gap-2">
                      <h3
                        className={`${josefinFont.className} text-[#000000] text-[14px] leading-[16.2px] `}
                      >
                        Ut diam consequat
                      </h3>
                      <p
                        className={`${josefinFont.className} mt-2 text-[12px] text-[#A1A8C1] leading-[14.2px]`}
                      >
                        Color:{" "}
                        <span className="text-[14px] leading-[16.2px]">
                          Brown
                        </span>
                      </p>
                      <p
                        className={`${josefinFont.className} text-[12px] text-[#A1A8C1] leading-[14.2px]`}
                      >
                        Size:{" "}
                        <span  className="text-[14px] leading-[16.2px]">XL</span>
                      </p>
                    </div>
                                  </div>
                                  <p className={`${josefinFont.className} text-[#15245E] text-[14px] leading-[16.2px]`}>$32.00</p>
                </div>
                <span className="h-[1px] w-full bg-[#E1E1E4] my-5 opacity-50" />
              </div>
              </div>
                          <div className="h-[289px] w-full bg-[#F4F4FC] ">
                              <div className="flex flex-col gap-6 px-5 py-2">
                                  <div className="flex justify-between items-center py-3 border-b">
                                      <h2 className={`${josefinFont.className} text-[#1D3178] text-[18px] leading-[21.6px] font-normal`}>Subtotals:</h2>
                                      <p className={`${lato.className} text-[16px] leading-[19.2px] font-normal text-[#15245E] `}>£219.00</p>
                                  </div>
                                  <div className="flex justify-between items-center py-3 border-b">
                                      <h2 className={`${josefinFont.className} text-[#1D3178] text-[18px] leading-[21.6px] font-normal`}>Total:</h2>
                                      <p className={`${lato.className} text-[16px] leading-[19.2px] font-normal text-[#15245E] `}>£319.00</p>
                                  </div>
                                  <div className="flex items-center gap-2">
                                      <span className="h-2 w-2 rounded-full bg-[#19D16F]" />
                                      <p className={`${lato.className} text-[#8A91AB] text-[12px] leading-[14.4px]`}>Shipping & taxes calculated at checkout</p>
                                  </div>
                                  <button className={`${lato.className} w-full h-[40px] rounded-[3px] text-[14px] leading-[16.2px] text-white font-bold bg-[#19D16F]`}>Proceed To Checkout</button>
                              </div>
              </div>
            </div>
          
        </div>
      </div>
    </Container>
    
    </>
  );
};

export default Payment;
