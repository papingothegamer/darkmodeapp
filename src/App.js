import React, { useState } from 'react';
import './App.css';
import LoadingAnimation from './LoadingAnimation';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading delay
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Simulated loading time of 3 seconds
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={`container ${isLoading ? 'loading' : ''} ${isDarkMode ? 'dark' : 'light'}`}>
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <>
          <h1>Light and Dark Mode Switch</h1>
          <p>Toggle the switch to switch between light and dark mode.</p>
          <div
            className={`switch-container ${isDarkMode ? 'dark' : 'light'}`}
            onClick={toggleDarkMode}
          >
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
        </>
      )}
    </div>
  );
}

export default App;