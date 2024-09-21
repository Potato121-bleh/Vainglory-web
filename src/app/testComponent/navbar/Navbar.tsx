import Link from 'next/link'
import Image from 'next/image'
import logo from '@/app/public/image/logo/logoM.png'

import Button from '@mui/material/Button'
import './navbar.css'

const Navbar = () => {
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
                        />
                    </Link>
                </li>

                <li className="route-con">
                    <Link
                        href="/"
                        className="hover:bg-[#71869a] rounded-2xl px-6 py-2 transition duration-700 ease-in-out "
                    >
                        Home
                    </Link>
                    <Link
                        href="testComponent/hero"
                        className="ml-4 hover:bg-[#71869a] rounded-2xl px-6 py-2 hover:transition duration-700 ease-in-out"
                    >
                        Hero
                    </Link>
                    <Link
                        href="/Items"
                        className="ml-4 hover:bg-[#71869a] rounded-2xl px-6 py-2 hover:transition duration-700 ease-in-out"
                    >
                        Item
                    </Link>
                    <Link
                        href="/Company"
                        className="ml-4 hover:bg-[#71869a] rounded-2xl px-6 py-2 hover:transition duration-700 ease-in-out"
                    >
                        Developer
                    </Link>
                    <Button
                        className="ml-[50px] py-2 rounded-full "
                        variant="contained"
                    >
                        Play Now
                    </Button>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
