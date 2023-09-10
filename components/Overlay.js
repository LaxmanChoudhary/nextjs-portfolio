import React, { useState, useEffect } from "react";
import "./overlay.css";

export default function Overlay() {
  const [displayModal, setDisplayModal] = useState(false);

  useEffect(() => {}, []);

  return (
    <div className="">
      <button
        className="CenterAlign"
        onClick={() => setDisplayModal(!displayModal)}
      >
        Settings
      </button>

      <div className={`Modal ${displayModal ? "Show" : ""}`}>
        <h3>Settings</h3>
        <button
          className="Close"
          onClick={() => setDisplayModal(!displayModal)}
        >
          X
        </button>
        <p className="HelpText">
          Note: these settings are saved in the browser only and can be lost
        </p>
      </div>
      <div
        className={`Overlay ${displayModal ? "Show" : ""}`}
        onClick={() => setDisplayModal(!displayModal)}
      />
    </div>
  );
}
