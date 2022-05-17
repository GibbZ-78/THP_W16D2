import React, { useContext } from 'react';
import DarkModeContext from '../../contexts/DarkModeContext';
import "./Footer.css";

const Footer = () => {

  const myFooterMode = useContext(DarkModeContext);
  const myFooterClassMode = `myFooter myFooter-${myFooterMode.mode}`;
  const myContraryMode = myFooterMode.mode === "light" ? "dark" : "light";

  return (
    <footer className={myFooterClassMode}>
      <p>
        Page footer
      </p>
    </footer>
  );
};

export default Footer;