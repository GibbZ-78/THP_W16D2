
import React from 'react';
import DarkModeContext from './contexts/DarkModeContext';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  
  const myStoredMode = (localStorage.getItem('DarkMode') !== null) ? localStorage.getItem('DarkMode') : "light";
  const myAppClassMode = `myApp myApp-${myStoredMode}`;
  
  return (
    <DarkModeContext.Provider value={{ mode: myStoredMode }}>
    <div className={myAppClassMode}>
      <Header />
      <Main />
      <Footer />
    </div>
    </DarkModeContext.Provider>
  );
}

export default App;
