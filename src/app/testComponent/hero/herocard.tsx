'use client'

import React, { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import './hero.css'
import { Modal, LinearProgress, Stack } from '@mui/joy'
import { Box } from '@mui/material'

type heroType = {
    heroId: number
    heroImg: string
    heroName: string
    heroRole: string
    heroDescription: string
    heroAttackType: string
    heroOffense: number
    heroDefense: number
    heroUtility: number
    heroMobility: number
}

function hero({
    heroId,
    heroImg,
    heroName,
    heroRole,
    heroDescription,
    heroAttackType,
    heroOffense,
    heroDefense,
    heroUtility,
    heroMobility,
}: heroType) {
    let [openModal, setOpenModal] = useState<boolean>(false)

    const handleClick = () => {
        console.log('it said it OPEN  bro')
        setOpenModal(true)
    }
    const handleClose = () => {
        console.log('it said it CLOSES bro')
        setOpenModal(false)
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        minWidth: '350px',
        width: '40%',
        color: 'black',
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    }

    return (
        <div className="flex justify-center">
            <div className=" herocard-con relative w-[150px] h-[215px] m-4 opacity-100">
                <Image
                    className="image-hero hover:scale-[105%] duration-500 ease-in-out cursor-pointer"
                    onClick={handleClick}
                    src={heroImg}
                    width={150}
                    height={100}
                    alt="hero"
                />
                <div className=" name-hero absolute text-center text-white font-bold translate-y-[-33px] p-1 opacity-100 text-[17px]  w-[150px] h-[37px] rounded-b-xl  bg-gradient-to-t from-black via-[#00274c] to-transparent">
                    {heroName}
                </div>
                <Modal
                    open={openModal}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <ul className="hero-profile-con">
                            <li>
                                <Image
                                    className="hero-img"
                                    src={heroImg}
                                    alt="hero image"
                                    width={90}
                                    height={120}
                                />
                            </li>
                            <li className="hero-profile-text-con">
                                <b>{heroName}</b>
                                <p>Role: {heroRole}</p>
                            </li>
                        </ul>
                        <p className="hero-description">{heroDescription}</p>
                        <ul className="hero-detail-con">
                            <ul>
                                <li>
                                    <b>Attack Type</b>
                                </li>
                                <li style={{ marginRight: '10px' }}>
                                    {heroAttackType}
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <b>Offense</b>
                                </li>
                                <li className="linearprocess-con">
                                    <LinearProgress
                                        determinate
                                        value={heroOffense}
                                    />
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <b>Defense</b>
                                </li>
                                <li className="linearprocess-con">
                                    <LinearProgress
                                        determinate
                                        value={heroDefense}
                                    />
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <b>Team Utility</b>
                                </li>
                                <li className="linearprocess-con">
                                    <LinearProgress
                                        determinate
                                        value={heroUtility}
                                    />
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <b>Mobility</b>
                                </li>
                                <li className="linearprocess-con">
                                    <LinearProgress
                                        determinate
                                        value={heroMobility}
                                    />
                                </li>
                            </ul>
                        </ul>
                    </Box>
                </Modal>
            </div>
        </div>
    )
}

export default hero
