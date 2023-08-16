import React, { useState } from 'react';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className="container">
      <div className={`switch-container ${isDarkMode ? 'dark' : ''}`} onClick={toggleDarkMode}>
        <div className="toggle-indicator"></div>
      </div>
      <h1>Light and Dark Mode Switch</h1>
      <p>Toggle the switch to switch between light and dark mode.</p>
      <style>
        {`
          :root {
            --bg-color: ${isDarkMode ? '#000' : '#fff'};
            --text-color: ${isDarkMode ? '#fff' : '#000'};
            --border-color: ${isDarkMode ? '#333' : '#ccc'};
          }
        `}
      </style>
    </div>
  );
}

export default App;