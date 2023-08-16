import React, { useState } from 'react';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  // Function to update the indicator color based on the background color
  const updateIndicatorColor = () => {
    const switchContainer = document.querySelector('.switch-container');
    const indicator = document.querySelector('.toggle-indicator');

    if (switchContainer && indicator) {
      if (isDarkMode) {
        indicator.style.backgroundColor = '#fff'; 
      } else {
        indicator.style.backgroundColor = '#000'; 
      }
    }
  };

 
  React.useEffect(() => {
    updateIndicatorColor();
  }, [isDarkMode]);

  return (
    <div className="container">
      <h1>Light and Dark Mode Switch</h1>
      <p>Toggle the switch to switch between light and dark mode.</p>
      <div className={`switch-container ${isDarkMode ? 'dark' : 'light'}`} onClick={toggleDarkMode}>
        <div className="toggle-indicator"></div>
      </div>
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