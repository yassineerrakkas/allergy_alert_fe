import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = ({ islogin, changestate }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.setItem("islogin", "false"); // Set the string "false"
    changestate(false); // Update the state
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="Navbar">
      <NavLink to="/" className="logo">
        {" "}
        <span className="allergy">Allergy</span> Alert.
      </NavLink>
      <ul className="hac">
        <li>
          <NavLink to="/"> Home</NavLink>
        </li>
        <li>
          <NavLink to="about-us">About Us</NavLink>
        </li>
        <li>
          <NavLink to="contact-us">Contact Us</NavLink>
        </li>
      </ul>
      <div className="btns">
        {islogin ? (
          <>
            <div className="btn logout" onClick={handleLogout}>
              Log out
            </div>
            <NavLink to="profile">
              <span className="material-symbols-outlined profile-icon">
                account_circle
              </span>
            </NavLink>
          </>
        ) : (
          <>
            <div className="btn login">
              <NavLink to="login">Log in</NavLink>
            </div>
            <div className="btn create-account">
              <NavLink to="create-account">CREATE ACCOUNT</NavLink>
            </div>
          </>
        )}

        <div className="lng">| English</div>
      </div>
    </div>
  );
};

export default Navbar;
