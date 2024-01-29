import React from "react";
import { css } from "@emotion/css";
import { fadeIn, slideInAnimation } from "../styles/animations";

const SliderPopup = ({ onClose, sliderPopupVisible }) => {
  return (
    <div
      className={css`
        position: absolute;
        top: 7rem;
        left: calc(100% - 10px);
        transform: translateX(-100%);
        background: white;
        padding: 1rem;
        height: fit-content;
        width: fit-content;
        margin-left: 10px;
        border-top-right-radius: 1rem;
        border-bottom-right-radius: 1rem;
        animation: ${slideInAnimation} 1s ease-in;
        z-index: 1;
      `}
    >
      <span
        className={css`
          margin: 0;
          padding: 0;
          font-family: "Poppins", sans-serif;
        `}
      >
        Hue
      </span>
      <input
        type="range"
        min="0"
        max="360"
        step="1"
        name="hue"
        className={css`
          appearance: none;
          margin: 0.65rem 0rem;
          width: 100%;
          position: relative;
          border-radius: 1rem;
          cursor: pointer;
          background: pink; /* placeholder */
        `}
        data-hue="1"
      />

      <span
        className={css`
          margin: 0;
          padding: 0;
          font-family: "Poppins", sans-serif;
        `}
      >
        Brightness
      </span>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        name="brightness"
        className={css`
          appearance: none;
          margin: 0.65rem 0rem;
          width: 100%;
          position: relative;
          border-radius: 1rem;
          cursor: pointer;
          background: pink; /* placeholder */
        `}
        data-bright="1"
      />

      <span
        className={css`
          margin: 0;
          padding: 0;
          font-family: "Poppins", sans-serif;
        `}
      >
        Saturation
      </span>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        name="saturation"
        className={css`
          appearance: none;
          margin: 0.65rem 0rem;
          width: 100%;
          position: relative;
          border-radius: 1rem;
          cursor: pointer;
          background: pink; /* placeholder */
        `}
        data-sat="1"
      />
      <button
        onClick={onClose}
        className={css`
          position: absolute;
          top: 5px;
          right: 5px;
          cursor: pointer;
          background: transparent;
          border: none;
          font-family: "Poppins", sans-serif;
        `}
      >
        X
      </button>
    </div>
  );
};

const CopyPopup = ({ onClose }) => {
  return (
    <div
      className={css`
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 20px;
        background-color: #fff;
        border: 1px solid #ddd;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        border-radius: 8px;
        max-width: 300px;
        width: 100%;
        text-align: center;
        z-index: 3;
        animation: ${fadeIn} 0.3s ease-out;
        font-family: "Mulish", sans-serif;
      `}
    >
      <button
        className={css`
          position: absolute;
          top: 10px;
          right: 10px;
          cursor: pointer;
          background: none;
          border: none;
          font-size: 18px;
          color: #555;
        `}
        onClick={onClose}
      >
        X
      </button>
      <h3
        className={css`
          color: #333;
          font-family: "Poppins", sans-serif;
        `}
      >
        Copied to clipboard!
      </h3>
      <span
        className={css`
          font-size: 24px;
          color: #4caf50;
        `}
      >
        &#128077;
      </span>
    </div>
  );
};

export { CopyPopup, SliderPopup };
