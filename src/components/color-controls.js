import React from "react";

function ColorControls() {
  return (
    <div className="Controls">
      <button className="Adjust">
        <i className="fas fa-sliders-h" />
      </button>
      <button className="lock">
        <i className="fas fa-lock-open" />
      </button>
    </div>
  );
}

function ControlPanels() {
  return (
    <div className="panel">
      <div className="library-panel">
        <button className="library">
          <i className="fas fa-book-open"></i>
        </button>
        <p>Library</p>
      </div>

      <div className="generate-panel">
        <button className="generate">
          <i className="fas fa-sync"></i>
        </button>
        <p>Generate</p>
      </div>

      <div className="save-panel">
        <button className="save">
          <i className="fas fa-save"></i>
        </button>
        <p>Save</p>
      </div>
    </div>
  );
}

function ControlContainers() {
  return (
    <div className="control-containers">
      <div className="copy-container">
        <div className="copy-popup">
          <h3>Copied to clipboard!</h3>
          <h4>&#128077;</h4>
        </div>
      </div>

      <div className="save-container">
        <div className="save-popup">
          <button className="close-save">X</button>
          <h4>Give a name to your palette!</h4>
          <input type="text" max-length="35" className="save-name" />
          <button type="submit" className="submit-save">
            Save
          </button>
        </div>
      </div>

      <div className="library-container">
        <div className="library-popup">
          <button className="close-library">X</button>
          <h4>Pick your palette</h4>
        </div>
      </div>
    </div>
  );
}

export { ColorControls, ControlPanels, ControlContainers };
