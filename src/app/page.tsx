import Image from "next/image";
import HomePage from "@/app/testComponent/home/home";
import HeroPage from "@/app/testComponent/hero/herocard";
import hero1 from "@/app/public/image/hero/malene.png";
import hero2 from "@/app/public/image/hero/2.jpg";
import hero3 from "@/app/public/image/hero/3.jpg";
const hero = [
  {
    id: "1",
    img: hero1,
    name: "hhd",
  },
  {
    id: "2",
    img: hero2,
    name: "hdh",
  },
  {
    id: "3",
    img: hero3,
    name: "hfh",
  },
  {
    id: "3",
    img: hero3,
    name: "hfh",
  },
  {
    id: "3",
    img: hero3,
    name: "hfh",
  },
  {
    id: "3",
    img: hero3,
    name: "hfh",
  },
  {
    id: "3",
    img: hero3,
    name: "hfh",
  },
];
export default function Home() {
  return (
    <>
      <HomePage />
      {/* <div className="flex flex-row justify-evenly flex-wrap ">
        {hero.map((hero) => (
          <HeroPage
            key={hero.id}
            heroId={hero.id}
            heroImg={hero.img}
            heroName={hero.name}
          />
        ))}
      </div> */}
    </>
  );
}
