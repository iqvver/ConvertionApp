import React from "react";
import Divider from "../Divider/Divider";

// всплывающее окно для переключения базовой валюты

const DropDefault = ({ isOpen, baseСurrency, handleDefault, setOpen }) => {
  return (
    <div className="dropdown">
      {isOpen ? (
        <div>
          <input id="default" type="checkbox" checked name="menu" />
          <label htmlFor="default">{baseСurrency}</label>
          <ul className="submenu">
            <li>
              <p onClick={handleDefault}>RUB</p>
            </li>
            <Divider />
            <li>
              <p onClick={handleDefault}>USD</p>
            </li>
            <Divider />
            <li>
              <p onClick={handleDefault}>EUR</p>
            </li>
          </ul>
        </div>
      ) : (
        <label htmlFor="default" onClick={() => setOpen(true)}>
          {baseСurrency}
        </label>
      )}
    </div>
  );
};

export default DropDefault;
