import Image from "next/image";
import React from "react";
import "./item.css";

const itemCard = ({
  title,
  Cost,
  Img,
}: {
  title: string;
  Cost: number;
  Img: string;
}) => {
  return (
    <div>
      <div className="item-con">
        <div className="tier-con">
          <div className="item-image">
            <Image src={Img} width={100} height={100} alt="" className="img" />
          </div>
          <div className="item-info">
            <h2>{title}</h2>
            <p>Cost : {" " + Cost}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default itemCard;
