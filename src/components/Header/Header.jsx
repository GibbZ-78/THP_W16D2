import React, { useContext } from 'react';
import githubDarkImg from '../../assets/images/github-dark.jpg';
import githubLightImg from '../../assets/images/github-light.jpg';
import DarkModeContext from '../../contexts/DarkModeContext';
import "./Header.css";

const Header = () => {

  let myHeaderMode = useContext(DarkModeContext);
  let myHeaderClassMode = `myHeader myHeader-${myHeaderMode.mode}`;
  let myContraryMode = myHeaderMode.mode === "light" ? "dark" : "light";
  let myGithubLogo = myHeaderMode.mode === "light" ? githubLightImg : githubDarkImg;

  const SwitchMode = () => {
    console.log(`Button pressed to switch to ${myContraryMode} mode but related behavior still to be udpated, instantiating useState().`);
    console.log(`  > BEFORE `);
    console.log(`    > myHeaderMode.mode ${myHeaderMode.mode}`);
    console.log(`    > myContraryMode ${myContraryMode}`);
    console.log(`    > localStorage ${localStorage.getItem('DarkMode')}`);
    myHeaderMode.mode = myContraryMode;
    myHeaderClassMode = `myHeader myHeader-${myHeaderMode.mode}`;
    myContraryMode = myHeaderMode.mode === "light" ? "dark" : "light";
    myGithubLogo = myHeaderMode.mode === "light" ? githubLightImg : githubDarkImg;
    localStorage.setItem('DarkMode', myContraryMode);
    console.log(`  > AFTER `);
    console.log(`    > myHeaderMode.mode ${myHeaderMode.mode}`);
    console.log(`    > myContraryMode ${myContraryMode}`);
    console.log(`    > localStorage ${localStorage.getItem('DarkMode')}`);
    console.log(`    > localStorage ${localStorage.getItem('DarkMode')}`);
  };

  return (
    <header className={myHeaderClassMode}>
      <h1>Portfolio de GibbZ</h1>
      <a href="https://github.com/GibbZ-78"><img src={myGithubLogo} alt="Github logo linking to GibbZ repository"/></a>
      <button onClick={SwitchMode}>Switch to {myContraryMode} mode</button>
    </header>
  );
};

export default Header;
