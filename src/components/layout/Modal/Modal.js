import React from "react";

const Modal = ({ setIsOpen }) => {
  return (
    <>
      {/* Overlay */}
      <div style={overlayStyle} onClick={() => setIsOpen(false)}>
        {/* Modal Content */}
        <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
          <h3>Test Modal</h3>
          <p>This is a simple modal</p>
          <button onClick={() => setIsOpen(false)}>Close</button>
        </div>
      </div>
    </>
  );
};

// Modal Styles
const modalStyle = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "400px",
  background: "white",
  borderRadius: "24px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  padding: "20px",
  textAlign: "center",
  zIndex: 1001,
};

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  zIndex: 1000,
};

export default Modal;