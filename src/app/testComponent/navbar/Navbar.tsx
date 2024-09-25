'use client'

import Link from 'next/link'
import Image from 'next/image'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import './navbar.css'
import { useState } from 'react'
import { Box, IconButton } from '@mui/material'
import { Divider } from '@mui/material'
import { LunchDining } from '@mui/icons-material'

const Navbar = () => {
    let [openDrawer, setOpenDrawer] = useState<boolean>(false)

    const handleOpenDrawer = () => {
        setOpenDrawer(true)
    }

    const handleCloseDrawer = () => {
        setOpenDrawer(false)
    }

    return (
        <nav className="navbar">
            <ul className="sub-con">
                <li className="logo-con">
                    <Link href="/">
                        <Image
                            src="/image/logo/logoM.png"
                            width={140}
                            height={150}
                            alt="logo"
                            className="vainglory-logo"
                        />
                    </Link>
                </li>

                <li className="route-con">
                    <Link
                        href="/"
                        className=" route-title hover:bg-[#71869a] rounded-2xl px-6 py-2 transition duration-700 ease-in-out "
                    >
                        Home
                    </Link>
                    <Link
                        href="/testComponent/hero"
                        className=" route-title ml-4 hover:bg-[#71869a] rounded-2xl px-6 py-2 hover:transition duration-700 ease-in-out"
                    >
                        Hero
                    </Link>
                    <Link
                        href="/Items"
                        className=" route-title ml-4 hover:bg-[#71869a] rounded-2xl px-6 py-2 hover:transition duration-700 ease-in-out"
                    >
                        Item
                    </Link>
                    <Link
                        href="/developer"
                        className=" route-title ml-4 hover:bg-[#71869a] rounded-2xl px-6 py-2 hover:transition duration-700 ease-in-out"
                    >
                        Developer
                    </Link>
                    <Button
                        className=" navbar-button ml-[50px] py-2 rounded-full "
                        variant="contained"
                    >
                        Play Now
                    </Button>
                </li>
                <li>
                    <IconButton>
                        <LunchDining
                            onClick={handleOpenDrawer}
                            className="burger-icon"
                        />
                    </IconButton>
                    <Drawer
                        anchor="right"
                        open={openDrawer}
                        onClose={handleCloseDrawer}
                    >
                        <Box
                            sx={{
                                height: '100%',
                                color: 'white',
                                width: '180px',
                                background: 'black',
                                overflowX: 'hidden',
                            }}
                        >
                            <div className="sidebar-img-con">
                                <Image
                                    className="sidebar-img"
                                    src="/vainRank.png"
                                    alt="storm-queen"
                                    width={50}
                                    height={30}
                                />
                                <div className="">
                                    <b>Vainglory</b>
                                </div>
                            </div>
                            <Divider
                                orientation="horizontal"
                                variant="middle"
                            />
                            <ul className="sidebar-router-con">
                                <li>
                                    <Link
                                        href="/"
                                        className=" sidebar-route-title hover:bg-[#393f45] rounded-2xl transition duration-700 ease-in-out "
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/testComponent/hero"
                                        className=" sidebar-route-title hover:bg-[#393f45] rounded-2xl transition duration-700 ease-in-out "
                                    >
                                        Hero
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/Items"
                                        className="  sidebar-route-title hover:bg-[#393f45] rounded-2xl transition duration-700 ease-in-out "
                                    >
                                        Item
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/developer"
                                        className="  sidebar-route-title-dev hover:bg-[#393f45] rounded-2xl transition duration-700 ease-in-out "
                                    >
                                        Developer
                                    </Link>
                                </li>
                            </ul>
                        </Box>
                    </Drawer>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
