import React from "react";
import Image from "next/image";

function hero() {
  const hero = [
    {
      id: "",
      img: "",
      name: "",
    },
    {
      id: "",
      img: "",
      name: "",
    },
  ];
  return (
    <>
      <div>
        {hero?.map((hero) => (
          <div key={hero.id}>
            <div>
              <Image src={hero.img} alt="herp" width={100} height={100} />
            </div>
            <div>{hero.name}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default hero;
