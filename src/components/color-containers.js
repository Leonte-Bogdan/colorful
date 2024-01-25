import React from "react";
import { useStyleStatus } from "../hooks/useStyleStatus";
import { css } from "@emotion/css";
import { PopupStyle } from "../styles/containers-style";

function ControlContainers() {
  const copyContainerStyle = useStyleStatus();
  const saveContainerStyle = useStyleStatus();
  const libraryContainerStyle = useStyleStatus();

  return (
    <div className="control-containers">
      <div className={`copy-container ${copyContainerStyle.style}`}>
        <PopupStyle>
          <h3>Copied to clipboard!</h3>
          <h4>&#128077;</h4>
        </PopupStyle>
        <button onClick={copyContainerStyle.toggle}>Toggle Copy Container</button>
      </div>

      <div className={`save-container ${saveContainerStyle.style}`}>
        <div
          className={css`
             {
              background: white;
              display: flex;
              flex-direction: column;
              justify-content: space-evenly;
              align-items: center;
              border-radius: 2rem;
              transition: transform 0.5s ease;
              transform: translateY(-2rem);
              min-width: 30%;
              min-height: 30vh;
            }
          `}
        >
          <button className="close-save" onClick={saveContainerStyle.toggle}>
            X
          </button>
          <h4>Give a name to your palette!</h4>
          <input type="text" maxLength={35} className="save-name" />
          <button type="submit" className="submit-save">
            Save
          </button>
        </div>
      </div>

      <div className={`library-container ${libraryContainerStyle.style}`}>
        <div
          className={css`
             {
              background: white;
              display: flex;
              flex-direction: column;
              justify-content: space-evenly;
              align-items: center;
              border-radius: 2rem;
              transition: transform 0.5s ease;
              transform: translateY(-2rem);
              min-width: 30%;
              min-height: 30vh;
            }
          `}
        >
          <button className="close-library" onClick={libraryContainerStyle.toggle}>
            X
          </button>
          <h4>Pick your palette</h4>
        </div>
      </div>
    </div>
  );
}

export { ControlContainers };
