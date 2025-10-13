import { useState } from "react";
import Modal from "./modal";
import "./modal.css";

export default function ModalTest() {
  const [showModal, setShowModal] = useState(false);

  function onClose() {
    setShowModal(false);
  }

  return (
    <div>
      <button onClick={() => setShowModal(!showModal)}>open modal popup</button>
      {showModal ? <Modal body={<div>Yup this is some body that is passed in</div>} onClose={onClose} /> : null}
    </div>
  );
}
