import React, { useRef, useEffect } from "react";

const Modal = ({ onClose }) => {
  const backdropRef = useRef(null);

  const keydownHandler = (e) => {
    // console.log("e.code", e);
    if (e.code !== "Escape") {
      return;
    }
    onClose();
  };

  useEffect(() => {
    window.addEventListener("keydown", keydownHandler);
    // console.log("Added eventListener");

    // console.log("Removed eventListener");
    return () => {
      window.removeEventListener("keydown", keydownHandler);
    };
  }, []);

  return (
    <div
      ref={backdropRef}
      style={{
        margin: "0 auto",
        padding: "0 0 12px 0",
        backgroundColor: "lightGrey",
      }}
    >
      <p
        style={{
          display: "block",
          textAlign: "center",
          padding: "22px 18px 14px",
        }}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
        tempore corrupti sint itaque fuga repellendus fugit ipsa vero libero.
        Voluptatibus nesciunt deserunt commodi, asperiores hic voluptatum
        facilis fugit ea rem? A odit nisi omnis. Cumque consequatur at harum
        iure aspernatur omnis voluptas fuga dolore non ullam ex tenetur aperiam,
        error itaque molestiae nobis culpa et dignissimos? Reprehenderit
        architecto voluptatum possimus. Incidunt rerum fugit iure nulla.
      </p>
      <button
        type="button"
        onClick={onClose}
        style={{
          display: "block",
          margin: "6px auto",
          backgroundColor: "orange",
          padding: "8px 18px",
          border: "none",
          borderRadius: "6px",
        }}
      >
        Close
      </button>
    </div>
  );
};

export default Modal;
