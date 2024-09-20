import Link from "next/link";
import Image from "next/image";
import logo from "@/app/public/image/logo/logoM.png";

import Button from "@mui/material/Button";

const Navbar = () => {
  return (
    <div>
      <nav className=" text-white ">
        <div className="container mx-auto flex justify-between items-center">
          <div className="my-10">
            <Link href="/">
              <Image src={logo} width={200} height={150} alt="logo" />
            </Link>
          </div>

          <div className="-mt-10 ">
            <Link
              href="/"
              className="hover:bg-[#71869a] rounded-2xl px-6 py-2 transition duration-700 ease-in-out "
            >
              Home
            </Link>
            <Link
              href="/Hero"
              className="ml-4 hover:bg-[#71869a] rounded-2xl px-6 py-2 hover:transition duration-700 ease-in-out"
            >
              Hero
            </Link>
            <Link
              href="/Items"
              className="ml-4 hover:bg-[#71869a] rounded-2xl px-6 py-2 hover:transition duration-700 ease-in-out"
            >
              Item
            </Link>
            <Link
              href="/Company"
              className="ml-4 hover:bg-[#71869a] rounded-2xl px-6 py-2 hover:transition duration-700 ease-in-out"
            >
              Developer
            </Link>
            <Button
              className="ml-[50px] py-2 rounded-full "
              variant="contained"
            >
              Play Now
            </Button>
          </div>
        </div>
      </nav>
      {/* end navigation bar */}
      {/* <div className="flex justify-between mx-[130px] my-[50px]">
        <div>
          <Image src={homeImg} width={350} height={250} alt="Home" />
        </div>
        <div className="mr-[200px] mt-[100px]">
          <h1 className="text-[35px] font-bold">Welcome to Vanglory</h1>
          <p className="text-[17px] text-gray-200 flex justify-center mt-[15px]">
            The Battle for the Halcyon Fold Has Begun
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default Navbar;
