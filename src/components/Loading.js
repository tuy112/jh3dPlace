import React from 'react';
import '../css/Loading.css';

const Loading = () => {
  return (
    <div className="loading-screen">
      <div className="loading-bar">
        <span className="loading-text">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;