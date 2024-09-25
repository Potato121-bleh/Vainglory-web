"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import "./hero.css";
import { Modal } from "@mui/joy";
import { Box } from "@mui/material";

function hero({
  heroId,
  heroImg,
  heroName,
}: {
  heroId: number;
  heroImg: string;
  heroName: string;
}) {
  let [openModal, setOpenModal] = useState<boolean>(false);

  const handleClick = () => {
    console.log("it said it OPEN  bro");
    setOpenModal(true);
  };
  const handleClose = () => {
    console.log("it said it CLOSES bro");
    setOpenModal(false);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div className="flex justify-center">
      <div className="relative w-[150px] h-[215px] m-4 opacity-100 herocard-con">
        <Image
          className="image-hero hover:scale-[105%] duration-500 ease-in-out cursor-pointer"
          onClick={handleClick}
          src={heroImg}
          width={150}
          height={100}
          alt="hero"
        />
        <div className="name-hero absolute text-center text-white font-bold translate-y-[-33px] p-1 opacity-100 text-[17px]  w-[150px] h-[37px] rounded-b-xl  bg-gradient-to-t from-black via-[#00274c] to-transparent">
          {heroName}
        </div>
        <Modal
          open={openModal}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>Hero: {heroName}</Box>
        </Modal>
      </div>
    </div>
  );
}

export default hero;
