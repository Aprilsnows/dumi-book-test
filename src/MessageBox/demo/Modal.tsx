import React, { useState, FC, memo, useMemo } from 'react';

import Mods from '../index';

export default function Modal() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  console.log(showModal);

  return (
    <div className="Modals">
      <button onClick={handleOpenModal}>打开弹框</button>
      {showModal && <Mods titles={'标题'} message={'内容'} onClose={handleCloseModal} />}
    </div>
  );
}
