import React from "react";
import hero1 from "@/app/public/image/hero/malene.png";
import hero2 from "@/app/public/image/hero/2.jpg";
import hero3 from "@/app/public/image/hero/3.jpg";
import HeroCard from "@/app/testComponent/hero/herocard";
import ReplySharpIcon from "@mui/icons-material/ReplySharp";

const heropage = () => {
  const hero = [
    {
      id: "1",
      img: hero1,
      name: "Melene",
    },
    {
      id: "2",
      img: hero2,
      name: "Layla",
    },
    {
      id: "3",
      img: hero3,
      name: "Miya",
    },
    {
      id: "4",
      img: hero3,
      name: "Bruno",
    },
    {
      id: "6",
      img: hero3,
      name: "Selena",
    },
    {
      id: "7",
      img: hero3,
      name: "Hanabi",
    },
    {
      id: "8",
      img: hero3,
      name: "Grock",
    },
    {
      id: "4",
      img: hero3,
      name: "Bruno",
    },
    {
      id: "6",
      img: hero3,
      name: "Selena",
    },
    {
      id: "7",
      img: hero3,
      name: "Hanabi",
    },
    {
      id: "8",
      img: hero3,
      name: "Grock",
    },
    {
      id: "4",
      img: hero3,
      name: "Bruno",
    },
  ];
  //ml90
  return (
    <div>
      {" "}
      {/* ml-[230px] */}
      <h1 className="text-gray-100 font-bold text-[38px] ml-[10px] mb-[20px]">
        Hero
      </h1>
      {/* mx-[220px] */}
      <div className="flex flex-row justify-between flex-wrap gap-2 gap-x-10">
        {hero.map((hero) => (
          <HeroCard
            key={hero.id}
            heroId={hero.id}
            heroImg={hero.img}
            heroName={hero.name}
          />
        ))}
      </div>
    </div>
  );
};

export default heropage;
