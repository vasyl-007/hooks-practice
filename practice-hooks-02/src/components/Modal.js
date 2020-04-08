import React, { useRef, useEffect } from "react";

const Modal = ({ onClose }) => {
  const backdropRef = useRef();

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

  const handleRefClose = (e) => {
    console.log("backdropRef", backdropRef);
    console.log("e.target", e.target);
    if (backdropRef.current && e.target !== backdropRef.current) {
      return;
    }
    onClose();
  };

  return (
    <div
      ref={backdropRef}
      onClick={handleRefClose}
      style={{
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999,
      }}
    >
      <div
        style={{
          padding: "16px",
          maxWidth: "480px",
          width: "100%",
          minHeight: "320px",
          backgroundColor: "white",
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
          Voluptatibus nesciunt deserunt commodi, asperiores hic voluptatum
          facilis fugit ea rem? A odit nisi omnis. Cumque consequatur at harum
          iure aspernatur omnis voluptas fuga dolore non ullam ex tenetur
          aperiam, error itaque molestiae nobis culpa et dignissimos?
          Reprehenderit architecto voluptatum possimus. Incidunt rerum fugit
          iure nulla.
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
    </div>
  );
};

export default Modal;
