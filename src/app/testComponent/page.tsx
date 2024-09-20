"use client";

import { Button, Modal } from "@mui/material";
import { useState } from "react";

export default function testComponent() {
  let [openModal, setOpenModal] = useState<boolean>(false);
  const handleClick = () => {
    setOpenModal(true);
  };
  return (
    <>
      <Button variant="contained">Contained</Button>
      <Modal
        open={openModal}
        //onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <h1>Hello brother</h1>
      </Modal>
    </>
  );
}
