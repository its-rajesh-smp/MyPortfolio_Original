import React from "react";
import "./Header.css";
import Nav from "../UI/Nav/Nav";
import Hambargar from "../UI/Hambargar/Hambargar";
import { ShowOnDesktop, ShowOnMobile } from "../../Styles/media";
function Header() {
  return (
    <header className="Header">
      <ShowOnMobile>
        <i className="bx bx-menu"></i>
        {/* <Hambargar /> */}
      </ShowOnMobile>
      <h1>Rajesh Smp</h1>
      <ShowOnDesktop>
        <Nav />
      </ShowOnDesktop>
    </header>
  );
}

export default Header;
