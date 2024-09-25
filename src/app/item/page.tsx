import React from 'react'
import Tier from '@/app/testComponent/item/itemCard'
import '@/app/testComponent/item/item.css'
import './itempage.css'
import { weaponTier1, weaponTier2, weaponTier3 } from './data/weaponData'
import { crystalTier1, crystalTier2, crystalTier3 } from './data/crystaldetail'
import { defenseTier1, defenseTier2, defenseTier3 } from './data/defend'
import { utilityTier1, utilityTier2, utilityTier3 } from './data/utilityData'
import { otherTier1, otherTier2, otherTier3 } from './data/other'

const itempage = () => {
    // const weaponDataT1 = [
    //   {
    //     title: "Weapon Blade",
    //     img: "/item/flare-gun.png",
    //     cost: 300,
    //   },
    //   {
    //     title: "Weapon Blade",
    //     img: "/item/flare-gun.png",
    //     cost: 300,
    //   },
    //   {
    //     title: "Weapon Blade",
    //     img: "/item/flare-gun.png",
    //     cost: 300,
    //   },
    //   {
    //     title: "Weapon Blade",
    //     img: "/item/flare-gun.png",
    //     cost: 300,
    //   },
    // ];

    return (
        <div className="all-item-con">
            {/* item weapon */}
            <h1>Weapon</h1>
            <div className="itempage-con">
                <div>
                    <h1>Tier3</h1>
                    {weaponTier3.map((item, index) => (
                        <div key={index}>
                            <Tier
                                Img={item.img}
                                title={item.title}
                                Cost={item.cost}
                            />
                        </div>
                    ))}
                    {/* <div className="lineW1"></div> */}
                </div>
                <div>
                    <h1>Tier2</h1>
                    {weaponTier2.map((item, index) => (
                        <div key={index}>
                            <Tier
                                Img={item.img}
                                title={item.title}
                                Cost={item.cost}
                            />
                        </div>
                    ))}
                    {/*<div className="lineW2"></div> */}
                </div>
                <div>
                    <h1>Tier1</h1>
                    {weaponTier1.map((item, index) => (
                        <div key={index}>
                            <Tier
                                Img={item.img}
                                title={item.title}
                                Cost={item.cost}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/*end weapon  */}
            {/* starting crystal */}

            <h1>Crystal</h1>
            <div className="itempage-con">
                <div>
                    <h1>Tier3</h1>
                    {crystalTier3.map((item, index) => (
                        <div key={index}>
                            <Tier
                                Img={item.img}
                                title={item.title}
                                Cost={item.cost}
                            />
                        </div>
                    ))}
                    {/* <div className="lineCr1"></div> */}
                </div>
                <div>
                    <h1>Tier2</h1>
                    {crystalTier2.map((item, index) => (
                        <div key={index}>
                            <Tier
                                Img={item.img}
                                title={item.title}
                                Cost={item.cost}
                            />
                        </div>
                    ))}
                    {/* <div className="lineCr2"></div> */}
                </div>
                <div>
                    <h1>Tier1</h1>
                    {crystalTier1.map((item, index) => (
                        <div key={index}>
                            <Tier
                                Img={item.img}
                                title={item.title}
                                Cost={item.cost}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* end crystall */}
            {/* starting defense */}

            <h1>Defense</h1>
            <div className="itempage-con">
                <div>
                    <h1>Tier3</h1>
                    {defenseTier3.map((item, index) => (
                        <div key={index}>
                            <Tier
                                Img={item.img}
                                title={item.title}
                                Cost={item.cost}
                            />
                        </div>
                    ))}
                    {/* <div className="lineDef1"></div> */}
                </div>
                <div>
                    <h1>Tier2</h1>
                    {defenseTier2.map((item, index) => (
                        <div key={index}>
                            <Tier
                                Img={item.img}
                                title={item.title}
                                Cost={item.cost}
                            />
                        </div>
                    ))}
                    {/* <div className="lineDef2"></div> */}
                </div>
                <div>
                    <h1>Tier1</h1>
                    {defenseTier1.map((item, index) => (
                        <div key={index}>
                            <Tier
                                Img={item.img}
                                title={item.title}
                                Cost={item.cost}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* end defense */}
            {/* starting utility */}

            <h1>Utility</h1>
            <div className="itempage-con-uti">
                <div>
                    <h1>Tier3</h1>
                    {utilityTier3.map((item, index) => (
                        <div key={index}>
                            <Tier
                                Img={item.img}
                                title={item.title}
                                Cost={item.cost}
                            />
                        </div>
                    ))}
                    {/* <div className="lineUli1"></div> */}
                </div>
                <div>
                    <h1>Tier2</h1>
                    {utilityTier2.map((item, index) => (
                        <div key={index}>
                            <Tier
                                Img={item.img}
                                title={item.title}
                                Cost={item.cost}
                            />
                        </div>
                    ))}
                    {/* <div className="lineUli2"></div> */}
                </div>
                <div>
                    <h1>Tier1</h1>
                    {utilityTier1.map((item, index) => (
                        <div key={index}>
                            <Tier
                                Img={item.img}
                                title={item.title}
                                Cost={item.cost}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* end utility */}
            {/* starting other */}

            <h1>Other</h1>
            <div className="itempage-con-oth">
                <div>
                    <h1>Tier3</h1>
                    {otherTier3.map((item, index) => (
                        <div key={index}>
                            <Tier
                                Img={item.img}
                                title={item.title}
                                Cost={item.cost}
                            />
                        </div>
                    ))}
                    {/* <div className="lineOth1"></div> */}
                </div>
                <div>
                    <h1>Tier2</h1>
                    {otherTier2.map((item, index) => (
                        <div key={index}>
                            <Tier
                                Img={item.img}
                                title={item.title}
                                Cost={item.cost}
                            />
                        </div>
                    ))}
                    {/* <div className="lineOth2"></div> */}
                </div>
                <div>
                    <h1>Tier1</h1>
                    {otherTier1.map((item, index) => (
                        <div key={index}>
                            <Tier
                                Img={item.img}
                                title={item.title}
                                Cost={item.cost}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* end other */}
        </div>
    )
}

export default itempage
