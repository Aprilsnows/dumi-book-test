import React, { useState, FC, memo, useMemo } from "react";

import Modal from "./demo/Modal";

import './Modal.css'

import { ModalProps, ModalStyle } from './interface';

const Mods: FC<ModalProps> = memo((props) => {

  const { titles, message,onClose } : any = props

  return (
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <h3>{titles}</h3>
            <button className="modal-close" onClick={onClose}>
              X
            </button>
          </div>
          <div className="modal-body">
            <p>{message}</p>
          </div>
          <div className="modal-footer">
            <button onClick={onClose}>确定</button>
          </div>
        </div>
      </div>
  );
})
Mods.defaultProps = {
  titles: '弹窗标题',
  message: '这是一段弹窗内容',
  onClose:()=>{}
}
export default Mods;