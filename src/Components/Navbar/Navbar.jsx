import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink
        to={"current"}
        className={({ isActive }) => (isActive ? "active-link" : " ")}
      >
        <div className="navbar__link">Текущий курс</div>
      </NavLink>
      <NavLink
        to={"convertion"}
        className={({ isActive }) => (isActive ? "active-link" : " ")}
      >
        <div className="navbar__link">Конвертация</div>
      </NavLink>
    </div>
  );
};

export default Navbar;
