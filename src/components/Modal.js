import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <div
          className="w-full h-screen bg-black opacity-60 fixed z-10"
          onClick={onClose}
        >
          {children}
        </div>
      )}
    </>
  );
};

export default Modal;
