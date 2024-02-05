import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders, faRotate, faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import { css } from "@emotion/css";

function ColorControls({ sliderPopupVisible, openSliderPopup, closeSliderPopup, changeColors, hexColor, checkColorContrast, saveColor }) {
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
        onClick={saveColor}
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

export { ColorControls };
