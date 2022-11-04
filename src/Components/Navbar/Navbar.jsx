import React from "react";
import { NavLink } from "react-router-dom";

// Блок навигации приложения
const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink
        to={"current"}
        className={({ isActive }) => (isActive ? "active-link" : " ")}
      >
        <div className="navbar__link">Текущий курс <div className="arrow" /></div>
        
      </NavLink>
      <NavLink
        to={"convertion"}
        className={({ isActive }) => (isActive ? "active-link" : " ")}
      >
        <div className="navbar__link">Конвертация <div className="arrow" /></div>
      </NavLink>
    </div>
  );
};

export default Navbar;
