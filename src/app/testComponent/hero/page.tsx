import React from 'react'
import HeroCard from '@/app/testComponent/hero/herocard'

const heropage = () => {
    const hero = [
        {
            id: 1,
            img: '/hero/malene.png',
            name: 'Melene',
            role: 'Mage',
            description:
                'Form swapping spellcaster who has the tools for any situation',
            attckType: 'Ranged',
            offense: 80,
            defense: 35,
            utility: 80,
            mobility: 60,
        },
        {
            id: 2,
            img: '/hero/malene.png',
            name: 'Layla',
            role: 'Mage',
            description:
                'Form swapping spellcaster who has the tools for any situation',
            attckType: 'Ranged',
            offense: 80,
            defense: 35,
            utility: 80,
            mobility: 60,
        },
        {
            id: 3,
            img: '/hero/malene.png',
            name: 'Miya',
            role: 'Mage',
            description:
                'Form swapping spellcaster who has the tools for any situation',
            attckType: 'Ranged',
            offense: 80,
            defense: 35,
            utility: 80,
            mobility: 60,
        },
        {
            id: 4,
            img: '/hero/malene.png',
            name: 'Bruno',
            role: 'Mage',
            description:
                'Form swapping spellcaster who has the tools for any situation',
            attckType: 'Ranged',
            offense: 80,
            defense: 35,
            utility: 80,
            mobility: 60,
        },
        {
            id: 6,
            img: '/hero/malene.png',
            name: 'Selena',
            role: 'Mage',
            description:
                'Form swapping spellcaster who has the tools for any situation',
            attckType: 'Ranged',
            offense: 80,
            defense: 35,
            utility: 80,
            mobility: 60,
        },
        {
            id: 7,
            img: '/hero/malene.png',
            name: 'Hanabi',
            role: 'Mage',
            description:
                'Form swapping spellcaster who has the tools for any situation',
            attckType: 'Ranged',
            offense: 80,
            defense: 35,
            utility: 80,
            mobility: 60,
        },
        {
            id: 8,
            img: '/hero/malene.png',
            name: 'Grock',
            role: 'Mage',
            description:
                'Form swapping spellcaster who has the tools for any situation',
            attckType: 'Ranged',
            offense: 80,
            defense: 35,
            utility: 80,
            mobility: 60,
        },
        {
            id: 9,
            img: '/hero/malene.png',
            name: 'Bruno',
            role: 'Mage',
            description:
                'Form swapping spellcaster who has the tools for any situation',
            attckType: 'Ranged',
            offense: 80,
            defense: 35,
            utility: 80,
            mobility: 60,
        },
        {
            id: 10,
            img: '/hero/malene.png',
            name: 'Selena',
            role: 'Mage',
            description:
                'Form swapping spellcaster who has the tools for any situation',
            attckType: 'Ranged',
            offense: 80,
            defense: 35,
            utility: 80,
            mobility: 60,
        },
    ]
    return (
        <div className="hero-main-con">
            {' '}
            {/* ml-[230px] */}
            <h1 className="text-gray-100 font-bold text-[38px] ml-[10px] mb-[20px]">
                Hero
            </h1>
            {/* mx-[220px] */}
            <div className="flex flex-row justify-between flex-wrap gap-2 gap-x-10">
                {hero.map((hero) => (
                    <HeroCard
                        key={hero.id}
                        heroId={hero.id}
                        heroImg={hero.img}
                        heroName={hero.name}
                        heroDescription={hero.description}
                        heroAttackType={hero.attckType}
                        heroRole={hero.role}
                        heroOffense={hero.offense}
                        heroDefense={hero.defense}
                        heroUtility={hero.utility}
                        heroMobility={hero.utility}
                    />
                ))}
            </div>
        </div>
    )
}

export default heropage
