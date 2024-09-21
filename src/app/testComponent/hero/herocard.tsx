import React from "react";
import Image, { StaticImageData } from "next/image";
import "./hero.css";
import hero1 from "@/app/public/image/hero/malene.png";
import hero2 from "@/app/public/image/hero/2.jpg";
import hero3 from "@/app/public/image/hero/3.jpg";

function hero({
  heroId,
  heroImg,
  heroName,
}: {
  heroId: React.ReactNode;
  heroImg: StaticImageData;
  heroName: React.ReactNode;
}) {
  // const hero = [

  //   {
  //     id: "",
  //     img: hero1,
  //     name: "",
  //   },
  //   {
  //     id: "",
  //     img: hero2,
  //     name: "",
  //   },
  //   {
  //     id: "",
  //     img: hero3,
  //     name: "",
  //   },
  // ];

  return (
    <>
      {/* <div>
        {hero?.map((hero) => (
          <div key={heroId}>S
            <div>
              <Image src={heroImg} alt="hero" width={100} height={100} />
            </div>
            <div>{heroName}</div>
          </div>
        ))}
      </div> */}
      <div className="flex justify-center hover:scale-[90%] duration-500 ease-in-out">
        <div className="w-[160px] h-[300px] m-4 opacity-100 ">
          <Image
            src={heroImg}
            width={150}
            height={100}
            alt="hero"
            className="image-hero"
          />
        </div>
        <div className="absolute text-center text-white font-bold translate-y-[280px] p-1 opacity-100 text-[17px]  w-[160px] h-[37px] rounded-b-xl  bg-gradient-to-t from-black via-[#00274c] to-transparent">
          {heroName}
        </div>
      </div>
    </>
  );
}

export default hero;
