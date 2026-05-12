"use client";

import React, { useState } from "react";
import Image from "next/image";
import "./hero.css";
import { Modal, LinearProgress } from "@mui/joy";
import { Box } from "@mui/material";

type HeroType = {
  heroId: number;
  heroImg: string;
  heroName: string;
  heroRole: string;
  heroDescription: string;
  heroAttackType: string;
  heroOffense: number;
  heroDefense: number;
  heroUtility: number;
  heroMobility: number;
};

// function Hero({
//   heroId,
//   heroImg,
//   heroName,
//   heroRole,
//   heroDescription,
//   heroAttackType,
//   heroOffense,
//   heroDefense,
//   heroUtility,
//   heroMobility,
// }: HeroType) {
//   const [openModal, setOpenModal] = useState(false);

//   const style = {
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     width: "40%",
//     minWidth: "350px",
//     bgcolor: "background.paper",
//     boxShadow: 24,
//     p: 4,
//   };

  return (
    <div className="flex justify-center">
      <<<<<<< HEAD
      <div className="hero-card bg-blue-500 text-white">
        <Image
          src={heroImg}
          alt={heroName}
          width={150}
          height={200}
          onClick={() => setOpenModal(true)}
        />

        <h2 className="text-center font-bold mt-2">
          {heroName}
        </h2>
      </div>
      =======
      <div className="hero-card bg-red-500 text-black">
        <Image
          src={heroImg}
          alt="hero image"
          width={170}
          height={220}
          onClick={() => setOpenModal(true)}
        />

        <h2 className="text-center italic mt-2">
          {heroName} - {heroRole}
        </h2>
      </div>
      >>>>>>> feature/new-hero-ui

      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
      >
        <Box sx={style}>
          <div className="flex gap-4">
            <Image
              src={heroImg}
              alt={heroName}
              width={100}
              height={130}
            />

            <div>
              <h1 className="font-bold text-2xl">
                {heroName}
              </h1>

              <p>{heroRole}</p>
            </div>
          </div>

          <p className="mt-4">{heroDescription}</p>

          <div className="mt-4">
            <p>Attack Type: {heroAttackType}</p>

            <p>Offense</p>
            <LinearProgress determinate value={heroOffense} />

            <p>Defense</p>
            <LinearProgress determinate value={heroDefense} />

            <p>Utility</p>
            <LinearProgress determinate value={heroUtility} />

            <p>Mobility</p>
            <LinearProgress determinate value={heroMobility} />
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default Hero;