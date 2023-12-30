import React from "react";
import logo from "../assets/image 1.png";
import "../Styles/navbar.css";

const Navbar = () => {
  return (
    <div className="container nav">
      <img src={logo} alt="" className="px-5 py-3" />
        <ul>
          <a href="/" className="link"> <li>Profile</li></a>
          <a href="/settings" className="link"><li>Account Sttings</li></a>
          <a href="/pricing" className="link"><li>Subscriptions</li></a>
          <a href="/grpah" className="link"><li>Graphs</li></a>
        </ul>
    </div>
  );
};

export default Navbar;
