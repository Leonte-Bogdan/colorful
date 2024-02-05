import React from "react";
import { css } from "@emotion/css";
import chroma from "chroma-js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";

function LibraryButton(savedColors) {
  const [isModalOpen, setModalOpen] = React.useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <div className="panel">
      <div
        className={css`
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          height: 20vh;
        `}
      >
        <div
          className={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-right: 1rem;
            gap: 1rem;
          `}
        >
          <button
            onClick={openModal}
            className={css`
              font-size: 1.2rem;
              color: white;
              cursor: pointer;
              margin: 0.5rem;
              padding: 1rem 2rem;
              background: rgb(245, 120, 120);
              border-style: none;
              border-radius: 1rem;
            `}
          >
            <FontAwesomeIcon icon={faBookOpen} />
          </button>
          <p
            className={css`
              font-family: "Mulish", sans-serif;
              font-size: 18px;
              font-weight: 600;
            `}
          >
            Library
          </p>
        </div>
      </div>
      {isModalOpen && <SavedColorsModal onClose={closeModal} />}
    </div>
  );
}

const SavedColorsModal = ({ onClose }) => {
  const savedColor = localStorage.getItem("color") || "";
  return (
    <div
      className={css`
        position: fixed;
        top: 0;
        left: 0;
        width: 150rem;
        height: 100vh;
        background: rgba(0, 0, 0, 0.5);
        z-index: 1;
      `}
    >
      <div
        className={css`
          position: fixed;
          top: 50%;
          left: 50%;
          width: 50rem;
          height: 40rem;
          max-height: 60%;
          transform: translate(-50%, -50%);
          background: white;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
          z-index: 2;
          overflow: auto;
        `}
      >
        <h2>Your Saved Colors</h2>
        <div>${savedColor}</div>
        <button
          className={css`
            position: absolute;
            top: 10px;
            right: 10px;
            cursor: pointer;
            background: none;
            border: none;
            font-size: 25px;
            color: #555;
          `}
          onClick={onClose}
        >
          X
        </button>
      </div>
    </div>
  );
};

const getTextColor = (backgroundColor) => {
  const luminance = chroma(backgroundColor).luminance();
  const textColor = luminance > 0.5 ? "black" : "white";
  return {
    color: textColor,
    luminance: luminance,
  };
};
export { LibraryButton };
