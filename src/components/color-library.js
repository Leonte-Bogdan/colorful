import React from "react";
import { css } from "@emotion/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { CopyPopup } from "./color-popups";
import { CopyToClipboard } from "react-copy-to-clipboard";

function LibraryButton() {
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
  const [popupVisible, setPopupVisible] = React.useState(false);
  const [colorTexts, setColorTexts] = React.useState([]);
  const savedColorsCount = parseInt(localStorage.getItem("savedColorsCount") || "0");
  const colorsFromLocalStorage = [];

  const openPopup = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  //Grabbing the Color from local storage

  for (let i = 1; i <= savedColorsCount; i++) {
    const key = "savedColor" + i;
    const hexColor = localStorage.getItem(key) || "";
    colorsFromLocalStorage.push(hexColor);
  }

  //Removing the color by its hexCode

  const removeColor = (color) => {
    const indexToRemove = colorTexts.indexOf(color);

    if (indexToRemove !== -1) {
      for (let i = indexToRemove + 2; i <= savedColorsCount; i++) {
        const currentKey = `savedColor${i}`;
        const nextKey = `savedColor${i - 1}`;
        localStorage.setItem(nextKey, localStorage.getItem(currentKey) ?? "");
      }

      localStorage.removeItem(`savedColor${savedColorsCount}`);

      const updatedCount = savedColorsCount - 1;
      localStorage.setItem("savedColorsCount", updatedCount.toString());

      setColorTexts((prevColors) => prevColors.filter((_, index) => index !== indexToRemove));
    }
  };

  React.useEffect(() => {
    const colorsFromLocalStorage = [];
    for (let i = 1; i <= savedColorsCount; i++) {
      const key = `savedColor${i}`;
      const hexColor = localStorage.getItem(key) || "";
      colorsFromLocalStorage.push(hexColor);
    }
    setColorTexts(colorsFromLocalStorage);
  }, [savedColorsCount]);
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
          font-family: "Mulish", sans-serif;
        `}
      >
        <h2
          className={css`
            padding: 1rem;
          `}
        >
          Your Saved Colors
        </h2>
        <div
          className={css`
            display: flex;
            flex-direction: column;
          `}
        >
          {colorsFromLocalStorage.map((color) => (
            <div
              key={color}
              className={css`
                padding: 1rem;
                display: flex;
                position: relative;
              `}
            >
              <button
                onClick={() => removeColor(color)}
                className={css`
                  cursor: pointer;
                  background: none;
                  border: none;
                  font-size: 18px;
                  color: #555;
                  margin-right: 1rem;
                  padding: 0.1rem;
                `}
              >
                X
              </button>
              <CopyToClipboard text={color}>
                <span
                  onClick={() => {
                    openPopup();
                  }}
                  className={css`
                    display: flex;
                    margin-right: 30rem;
                    margin-left: 1rem;
                    font-size: 1rem;
                    width: 2rem;
                    font-weight: bold;
                    cursor: pointer;
                  `}
                >
                  {color}
                </span>
              </CopyToClipboard>
              <div
                className={css`
                  width: 15rem;
                  max-width: 15rem;
                  height: 1rem;
                  background: ${color};
                `}
              ></div>
            </div>
          ))}
        </div>
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
      {popupVisible && <CopyPopup onClose={closePopup} />}
    </div>
  );
};

export { LibraryButton };
