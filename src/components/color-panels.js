import React from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faSliders, faBookOpen, faRotate, faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import { css } from "@emotion/css";
import { useStyleStatus } from "../hooks/useStyleStatus";
import { ControlContainers } from "./color-containers";

const Button = styled.button`
  font-family: "Poppins", sans-serif;
`;

function ColorControls() {
  return (
    <div className="Controls">
      <Button className="Adjust">
        <FontAwesomeIcon icon={faSliders} />
      </Button>
      <Button className="lock">
        <FontAwesomeIcon icon={faLock} />
      </Button>
    </div>
  );
}

function ControlPanels() {
  const containerStyle = useStyleStatus();

  return (
    <div className="panel">
      <div
        className={css`
          display: flex;
          flex-direction: column;
          align-items: center;
        `}
      >
        <button className="library" onClick={containerStyle.toggle}>
          <FontAwesomeIcon icon={faBookOpen} />
        </button>
        <p>Library</p>
      </div>

      <div
        className={css`
          display: flex;
          flex-direction: column;
          align-items: center;
        `}
      >
        <button className="generate" onClick={containerStyle.toggle}>
          <FontAwesomeIcon icon={faRotate} />
        </button>
        <p>Generate</p>
      </div>

      <div
        className={css`
          display: flex;
          flex-direction: column;
          align-items: center;
        `}
      >
        <button className="save" onClick={containerStyle.toggle}>
          <FontAwesomeIcon icon={faFloppyDisk} />
        </button>
        <p>Save</p>
      </div>
      {containerStyle.isActive && <ControlContainers />}
    </div>
  );
}

export { ColorControls, ControlPanels, ControlContainers };
