import React from 'react'
import Image from 'next/image'
import './homepage.css'

function HomePage() {
    return (
        <section className="home-main-con">
            <ul className="home-sub-con">
                <li className="home-img-con">
                    <Image
                        className="home-img"
                        src="/image/component/home/HomeImg.png"
                        width={350}
                        height={250}
                        alt="Home"
                    />
                </li>
                <li className="home-text-con">
                    <h1 className="title text-[35px] font-bold">
                        Welcome to Vainglory
                    </h1>
                    <p className="text-[17px] text-gray-200 mt-[15px]">
                        The Battle for the Halcyon Fold Has Begun
                    </p>
                </li>
            </ul>
        </section>
    )
}

export default HomePage
