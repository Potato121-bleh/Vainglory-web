import React from "react";
import HeroCard from "@/app/testComponent/hero/herocard";
import "./heropage.css";
import { hero } from "./datahero";

const heropage = () => {
  // const hero = [
  //   {
  //     id: 1,
  //     img: "/hero/malene.png",
  //     name: "Melene",
  //   },
  //   {
  //     id: 2,
  //     img: "/hero/malene.png",
  //     name: "Layla",
  //   },
  //   {
  //     id: 3,
  //     img: "/hero/malene.png",
  //     name: "Miya",
  //   },
  //   {
  //     id: 4,
  //     img: "/hero/malene.png",
  //     name: "Bruno",
  //   },
  //   {
  //     id: 6,
  //     img: "/hero/malene.png",
  //     name: "Selena",
  //   },
  //   {
  //     id: 7,
  //     img: "/hero/malene.png",
  //     name: "Hanabi",
  //   },
  //   {
  //     id: 8,
  //     img: "/hero/malene.png",
  //     name: "Grock",
  //   },
  //   {
  //     id: 9,
  //     img: "/hero/malene.png",
  //     name: "Bruno",
  //   },
  //   {
  //     id: 10,
  //     img: "/hero/malene.png",
  //     name: "Selena",
  //   },
  // ];
  return (
    <div className="heropage">
      {" "}
      {/* ml-[230px] */}
      <h1 className="title text-gray-100 font-bold text-[38px] ml-[10px] mb-[20px]">
        Hero
      </h1>
      {/* mx-[220px] */}
      <div className="hero-con flex flex-row justify-between flex-wrap  gap-2 gap-x-10 ">
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
