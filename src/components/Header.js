import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [status, setStatus] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} className="logo-image" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <button
            className="status-btn"
            onClick={() => {
              status === "Login" ? setStatus("Logout") : setStatus("Login");
            }}
          >
            {status}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
