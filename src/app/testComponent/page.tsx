'use client'

import { Box, Button, Modal } from '@mui/material'
import { useState } from 'react'

export default function testComponent() {
    let [openModal, setOpenModal] = useState<boolean>(false)
    let [selectedHero, setSelectedHero] = useState<heroArrType[]>([])

    const handleClick = (elementId: number) => {
        for (let i = 0; i < heroArr.length; i++) {
            if (heroArr[i].id == elementId) {
                let selectedHeroTemp = [heroArr[i]]
                setSelectedHero(selectedHeroTemp)
            }
        }
        setOpenModal(true)
    }
    const handleClose = () => {
        setOpenModal(false)
    }

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    }

    type heroArrType = {
        id: number
        name: string
    }

    const heroArr: heroArrType[] = [
        {
            id: 1,
            name: 'Krul',
        },
        {
            id: 2,
            name: 'Malane',
        },
        {
            id: 3,
            name: 'Ringo',
        },
    ]

    return (
        <>
            {heroArr.map((element) => (
                <Button
                    key={element.id}
                    onClick={() => handleClick(element.id)}
                    variant="contained"
                >
                    {element.name}
                </Button>
            ))}
            {selectedHero.map((element) => (
                <Modal
                    open={openModal}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>Hero: {element.name}</Box>
                </Modal>
            ))}
        </>
    )
}
