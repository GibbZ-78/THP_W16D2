import React, { useContext } from 'react';
import DarkModeContext from '../../contexts/DarkModeContext';
import "./Main.css";

const Main = () => {

  const myMainMode = useContext(DarkModeContext);
  const myMainClassMode = `myMain myMain-${myMainMode.mode}`;
  const myContraryMode = myMainMode.mode === "light" ? "dark" : "light";

  return (
    <main className={myMainClassMode}>
      <p>
        Page content
      </p>
    </main>
  );
};

export default Main;