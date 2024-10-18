import * as React from "react";
import "../styles/player.css";
import queueMock from "../assets/queue-mock.png";

const Selection = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", margin: "1rem" }}>
      <strong>Now listening:</strong>
      <span>BRAZIL Sounds</span>
    </div>
  );
};

const Queue = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", margin: "1rem" }}>
      <img src={queueMock} width={200} />
    </div>
  );
};

const Controls = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", margin: "1rem" }}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/4028/4028535.png"
        width={50}
      />
    </div>
  );
};
export const Player = () => {
  return (
    <section className="player">
      <Selection />
      <Queue />
      <Controls />
    </section>
  );
};
