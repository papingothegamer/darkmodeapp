import React, { useState, useEffect } from 'react';
import './App.css';

function LoadingAnimation() {
  const [loading, setLoading] = useState(true);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (percentage < 100) {
        setPercentage(prevPercentage => prevPercentage + 1);
      } else {
        clearInterval(interval);
        setLoading(false);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [percentage]);

  return (
    <div className="loader-container">
      <div className={`loading-bar ${loading ? 'active' : ''}`}></div>
      <div className="percentage-loader">{percentage}%</div>
    </div>
  );
}

export default LoadingAnimation;