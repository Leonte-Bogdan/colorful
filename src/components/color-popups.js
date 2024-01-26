import React from "react";
import { css } from "@emotion/css";
import { fadeIn } from "../styles/animations";

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
        z-index: 1;
        animation: ${fadeIn} 0.3s ease-out;
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
          margin-bottom: 10px;
          color: #333;
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

export { CopyPopup };
