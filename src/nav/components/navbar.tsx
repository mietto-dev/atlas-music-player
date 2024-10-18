import * as React from "react";
import "../styles/navbar.css";
import searchMock from "../assets/search-mock.png";

const Search = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", margin: "1rem" }}>
      <img src={searchMock} width={400} />
    </div>
  );
};

export const Navbar = () => {
  return (
    <section className="navbar">
      <Search />
    </section>
  );
};
