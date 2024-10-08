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

      {/* <div
                className="text"
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <p>
                    Water in every direction is a terrifying luxury. <br />
                    Truth goes unarmed, but I shall carry a spear
                </p>
                <p>By </p>
                <b style={{ marginTop: '15px', fontSize: '17px' }}>Idris</b>
            </div> */}

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
