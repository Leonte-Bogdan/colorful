import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faSliders, faBookOpen, faRotate, faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import { css } from "@emotion/css";

function ColorControls({ sliderPopupVisible, openSliderPopup, closeSliderPopup }) {
  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
        justify-content: space-evenly;
        z-index: 1;
      `}
    >
      <button
        className={css`
          display: flex;
          flex-direction: column;
          background: white;
        `}
        onClick={sliderPopupVisible ? closeSliderPopup : openSliderPopup}
      >
        <FontAwesomeIcon icon={faSliders} />
      </button>
      <button
        className={css`
          display: flex;
          flex-direction: column;
          background: white;
        `}
      >
        <FontAwesomeIcon icon={faLock} />
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
        `}
      >
        <div
          className={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-right: 1rem;
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

        <div
          className={css`
            display: flex;
            align-items: center;
            flex-direction: column;
            margin-right: 1rem;
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
            <FontAwesomeIcon icon={faRotate} />
          </button>
          <p
            className={css`
              font-family: "Mulish", sans-serif;
              font-size: 18px;
              font-weight: 600;
            `}
          >
            Generate
          </p>
        </div>

        <div
          className={css`
            display: flex;
            align-items: center;
            flex-direction: column;
            margin-right: 1rem;
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
            <FontAwesomeIcon icon={faFloppyDisk} />
          </button>
          <p
            className={css`
              font-family: "Mulish", sans-serif;
              font-size: 18px;
              font-weight: 600;
            `}
          >
            Save
          </p>
        </div>
      </div>
    </div>
  );
}
export { ColorControls, ColorButtons };
