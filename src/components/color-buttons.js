import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders, faBookOpen, faRotate, faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import { css } from "@emotion/css";

function ColorControls({ sliderPopupVisible, openSliderPopup, closeSliderPopup, changeColors, hexColor, checkColorContrast }) {
  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        z-index: 1;
        gap: 5rem;
        border: none;
      `}
    >
      <button
        className={css`
          display: flex;
          flex-direction: column;
          background: none;
          border: none;
          color: ${checkColorContrast(hexColor).color};
          font-size: 2rem;
          cursor: pointer;
        `}
        onClick={sliderPopupVisible ? closeSliderPopup : openSliderPopup}
      >
        <FontAwesomeIcon icon={faSliders} />
      </button>
      <button
        onClick={changeColors}
        className={css`
          display: flex;
          flex-direction: column;
          background: none;
          border: none;
          color: ${checkColorContrast(hexColor).color};
          font-size: 2rem;
          cursor: pointer;
        `}
      >
        <FontAwesomeIcon icon={faRotate} />
      </button>

      <button
        className={css`
          display: flex;
          flex-direction: column;
          background: none;
          border: none;
          color: ${checkColorContrast(hexColor).color};
          font-size: 2rem;
          cursor: pointer;
        `}
      >
        <FontAwesomeIcon icon={faFloppyDisk} />
      </button>
    </div>
  );
}

function ColorButtons() {
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
    </div>
  );
}
export { ColorControls, ColorButtons };
