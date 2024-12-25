import React from 'react';

function AppBar() {
  return (
    <div 
      style={{
        backgroundColor: '#282c34', // Dark background for contrast
        padding: '10px',
        marginBottom: '2px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center', // Center items vertically
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)', // Subtle shadow for depth
      }}
    >
      <h1 style={{ 
        margin: 0, 
        color: '#61dafb', // Light blue color for the heading
        fontFamily: 'Arial, sans-serif', // Change font family
        fontSize: '2rem', // Increase font size
        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)', // Add text shadow for depth
      }}>Comet</h1> 
      <div>
        <a 
          href="/signup" 
          style={{ 
            textDecoration: 'none', 
            color: '#61dafb', 
            marginRight: '15px', 
            padding: '10px 15px', // Add padding for buttons
            borderRadius: '5px', // Rounded corners
            backgroundColor: 'rgba(255, 255, 255, 0.1)', // Semi-transparent background
            transition: 'background-color 0.3s, transform 0.3s', // Smooth transition
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'} // Hover effect
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
        >
          Sign Up
        </a>
        <a 
          href="/signin" 
          style={{ 
            textDecoration: 'none', 
            color: '#61dafb', 
            padding: '10px 15px', // Add padding for buttons
            borderRadius: '5px', // Rounded corners
            backgroundColor: 'rgba(255, 255, 255, 0.1)', // Semi-transparent background
            transition: 'background-color 0.3s, transform 0.3s', // Smooth transition
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'} // Hover effect
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
        >
          Sign In
        </a>
      </div>
    </div>
  );
}

export default AppBar;