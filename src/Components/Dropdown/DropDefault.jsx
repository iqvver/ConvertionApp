import React, { useState, useEffect, useRef } from "react";
import Divider from "../Divider/Divider";

const DropLang = () => {
  const [Lang, getLang] = useState("RU");
  const [isLangOpen, setLangOpen] = useState(false);
  let handleLang = (event) => {
    getLang(event.target.innerText);
    setLangOpen(false);
  };

  const ref = useRef();
  useOnClickOutside(ref, () => setLangOpen(false));
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
      {isLangOpen ? (
        <div ref={ref}>
          <input id="language" type="checkbox" checked name="menu" />
          <label for="language">{Lang}</label>
          <ul className="submenu">
            <li>
              <p onClick={handleLang}>RU</p>
            </li>
            <Divider />
            <li>
              <p onClick={handleLang}>ENG</p>
            </li>
            <Divider />
            <li>
              <p onClick={handleLang}>MOL</p>
            </li>
          </ul>
        </div>
      ) : (
        <label for="language" onClick={() => setLangOpen(true)}>
          {Lang}
        </label>
      )}
    </div>
  );
};

export default DropLang;
