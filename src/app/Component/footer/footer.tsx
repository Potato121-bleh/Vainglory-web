import Image from "next/image";
import React from "react";
import "./footer.css";

const footer = () => {
  return (
    <div className="footer-con">
      <div className="list-logo-con">
        <div className="list-logo">
          <Image
            src="/footer/html.png"
            width={100}
            height={100}
            alt=""
            className="pic"
          />
        </div>
        <div className="list-logo">
          <Image
            src="/footer/css.png"
            width={100}
            height={100}
            alt=""
            className="pic"
          />
        </div>
        <div className="list-logo">
          <Image
            src="/footer/js.jpg"
            width={100}
            height={100}
            alt=""
            className="pic"
          />
        </div>
        <div className="list-logo">
          <Image
            src="/footer/tailwind.png"
            width={100}
            height={100}
            alt=""
            className="pic"
          />
        </div>
        <div className="list-logo">
          <Image
            src="/footer/Ts.jpg"
            width={100}
            height={100}
            alt=""
            className="pic"
          />
        </div>
        <div className="list-logo ">
          <Image
            style={{ width: 50, height: 40, objectFit: "cover" }}
            src="/footer/nextJsN.png"
            width={100}
            height={100}
            alt=""
            className="pic"
          />
        </div>
        <div className="list-logo">
          <Image
            src="/footer/mui.png"
            width={100}
            height={100}
            alt=""
            className="pic"
          />
        </div>
      </div>

      <p className="text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis facere
        nihil fugiat. hjkhgagjkjkdjk
        <span className="second-line">
          quam sit ullam placeat hic mollitia numquam soluta eaque doloribus
        </span>
      </p>

      <div className="footer-logo">
        <Image
          src="/image/logo/logoM.png"
          width={100}
          height={100}
          alt="logo"
          className="lg"
        />
      </div>
    </div>
  );
};

export default footer;
