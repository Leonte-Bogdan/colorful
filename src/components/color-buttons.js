import React from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faSliders, faBookOpen, faRotate, faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import { css } from "@emotion/css";

const Button = styled.button`
  font-family: "Poppins", sans-serif;
`;

function ColorControls() {
  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
        justify-content: space-evenly;
      `}
    >
      <Button className={css``}>
        <FontAwesomeIcon icon={faSliders} />
      </Button>
      <Button className={css``}>
        <FontAwesomeIcon icon={faLock} />
      </Button>
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
          <p>Library</p>
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
          <p>Generate</p>
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
          <p>Save</p>
        </div>
      </div>
    </div>
  );
}
export { ColorControls, ColorButtons };
