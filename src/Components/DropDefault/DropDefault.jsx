import React, { useState, useEffect, useRef } from "react";
import Divider from "../Divider/Divider";

const DropDefault = () => {
  const [def, getDef] = useState("RUB");
  const [isDefOpen, setDefOpen] = useState(false);
  let handleDef = (event) => {
    getDef(event.target.innerText);
    setDefOpen(false);
  };

  const ref = useRef();
  useOnClickOutside(ref, () => setDefOpen(false));
  function useOnClickOutside(ref, handler) {
    useEffect(() => {
      const listener = (event) => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    }, [ref, handler]);
  }
  return (
    <div className="dropdown">
      {isDefOpen ? (
        <div ref={ref}>
          <input id="default" type="checkbox" checked name="menu" />
          <label for="default">{def}</label>
          <ul className="submenu">
            <li>
              <p onClick={handleDef}>RUB</p>
            </li>
            <Divider />
            <li>
              <p onClick={handleDef}>USD</p>
            </li>
            <Divider />
            <li>
              <p onClick={handleDef}>EUR</p>
            </li>
          </ul>
        </div>
      ) : (
        <label for="default" onClick={() => setDefOpen(true)}>
           {def}
        </label>
      )}
    </div>
  );
};

export default DropDefault;
