import React from "react";
import { css } from "@emotion/css";
import { fadeIn, slideInAnimation } from "../styles/animations";
import { ColorSlider, BrightnessSlider, SaturationSlider } from "./color-sliders";

const SliderPopup = ({ onClose, sliderPopupVisible, hexColor, onSliderChange, setHexColor }) => {
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
        border-top-left-radius: 1rem;
        border-bottom-left-radius: 1rem;
        animation: ${slideInAnimation} 1s ease-in;
        z-index: 1;
      `}
    >
      <ColorSlider setHexColor={setHexColor} hexColor={hexColor} />
      <BrightnessSlider hexColor={hexColor} setHexColor={setHexColor} />
      <SaturationSlider onClose={onClose} hexColor={hexColor} setHexColor={setHexColor} />
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
const SavePopup = ({ onClose }) => {
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
          font-size: 24px;
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
        Added to library!
      </h3>
      <span
        className={css`
          font-size: 30px;
          background: linear-gradient(to right, #ff4e50, #fc913a, #f9d423, #2ecc71, #3498db, #9b59b6, #ff4e50);
          -webkit-background-clip: text;
          color: transparent;
        `}
      >
        &#10084;
      </span>
    </div>
  );
};

const ColorExistsPopup = ({ onClose }) => {
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
          font-size: 24px;
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
          font-size: 1.2rem;
        `}
      >
        Color already existent in library!
      </h3>
    </div>
  );
};

export { CopyPopup, SliderPopup, ColorSlider, SavePopup, ColorExistsPopup };
