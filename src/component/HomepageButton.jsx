import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomepageButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/'); // Navigate to the homepage
  };

  return (
    <button
      onClick={handleClick}
      style={{
        padding: '10px',
        backgroundColor: '#28a745',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
      }}
    >
      Home Page
    </button>
  );
};

export default HomepageButton;