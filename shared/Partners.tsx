import Container from "@/shared/Container";
import Image from "next/image";
import React from "react";
import image from "@/images/Partners.png";
const Partner = () => {
  return (
    <div>
      <Container className="flex items-center justify-center py-36">
        <Image src={image} alt="" className="w-[904px] h-[93px]" />
      </Container>
    </div>
  );
};

export default Partner;
