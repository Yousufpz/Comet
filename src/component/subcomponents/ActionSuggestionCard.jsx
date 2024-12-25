import React, { useState, useEffect, useMemo } from 'react';
import './ActionSuggestionCard.css'; // Import the CSS file for styling
import { useNavigate } from 'react-router-dom';

const defaultSuggestions = [
  "Filter Your Transactions",
  "Check account balance",
  "Issue new Card",
  "Send money To Recipients",
  "View transaction history",
  "Apply for a loan",
  "Order a new debit card",
  "Report a lost/stolen card",
  "Contact customer support",
  "Set budget for this month",
  "Track spending",
  "Analyze spending habits",
  "Find investment options",
  "Calculate interest rates",
  "Set savings goals",
  "Create a financial plan",
  "Finish the report",
  "Schedule a call with financial advisor",
  "Schedule a call with loan officer",
];

const ActionSuggestionCard = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("");
  const [suggestions, setSuggestions] = useState(defaultSuggestions);

  const newSuggestions = useMemo(() => {
    let filteredSuggestions = suggestions.filter((x) => x.includes(filter));
    if (filteredSuggestions.length > 2) {
      filteredSuggestions = filteredSuggestions.slice(0, 4);
    }
    return filteredSuggestions;
  }, [filter]);

  const handleSuggestionClick = (suggestion) => {
    setFilter(suggestion);
    setSuggestions([]);
    // Move the cursor to the end of the input
    setTimeout(() => {
      const input = document.getElementById('action-input');
      input.focus();
      input.setSelectionRange(suggestion.length, suggestion.length);
      const route = `/${suggestion.toLowerCase().replace(/\s/g, '-')}`;
      navigate(route);
    }, 0);
  };

  return (
    <div 
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '55vh',
        backgroundColor : 'F4F3FC' // Add a subtle background color
      }}
    >
      <div 
        style={{
          width: '450px', // Increased width for a slightly larger card
          background: '#fff',
          borderRadius: '10px',
          boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)', // Enhanced shadow
          padding: '30px',
        }}
      >
        <h2 style={{ marginBottom: '20px' }}></h2> 
        <input
          placeholder="Search anything"
          id="action-input"
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
          }}
          style={{
            width: '90%',
            padding: '15px 20px',
            borderRadius: '5px',
            border: '1px solid #ddd', 
            fontSize: '18px',
            outline: 'none',
          }}
        />
        {newSuggestions.map((suggestion, index) => (
          <ul
            key={index}
            className="suggestion-item"
            onClick={() => handleSuggestionClick(suggestion)}
            style={{
              listStyle: 'none',
              padding: '10px 15px',
              margin: '0',
              cursor: 'pointer',
              borderRadius: '5px', // Added rounded corners to list items
              borderBottom: '1px solid #eee',
              '&:hover': {
                backgroundColor: '#f0f0f0', // Subtle hover background
              },
            }}
          >
            {suggestion}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default ActionSuggestionCard;