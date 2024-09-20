import React from "react";

import homeImg from "../../image/component/home/HomeImg.png";
import Image from "next/image";

function HomePage() {
  return (
    <div className="flex justify-between mx-[130px] my-[50px] min-h-auto text-white">
      <div>
        <Image src={homeImg} width={350} height={250} alt="Home" />
      </div>
      <div className="mr-[200px] mt-[100px]">
        <h1 className="text-[35px] font-bold">Welcome to Vanglory</h1>
        <p className="text-[17px] text-gray-200 flex justify-center mt-[15px]">
          The Battle for the Halcyon Fold Has Begun
        </p>
      </div>
    </div>
  );
}

export default HomePage;
