import React, { useState } from "react";
import "./FamilyButton.css";

const FamilyButton = () => {
  const [gender, setGender] = useState("");
  const [message, setMessage] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleIconClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleGenderSelect = (selectedGender) => {
    setGender(selectedGender);
    setShowDropdown(false);
    setMessage("Η Οικογενειακή Κατάσταση καταχωρήθηκε επιτυχώς!");
    setTimeout(() => {
      setMessage("");
    }, 5000);
  };

  return (
    <div className="family-button-container">
      <label htmlFor="family-input" className="input-label">
        Οικογενειακή Κατάσταση
      </label>
      <div className="input-wrapper">
        <input
          id="family-input"
          className="custom-input"
          type="text"
          placeholder="Επιλέξτε"
          value={gender}
          readOnly
        />
        <button className="dropdown-icon" onClick={handleIconClick}>
          ▼
        </button>
        {showDropdown && (
          <div className="family-dropdown">
            {["Άγαμος/η", "Έγγαμος/η"].map((option) => (
              <div
                key={option}
                className="dropdown-item"
                onClick={() => handleGenderSelect(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
      {message && <p className="success-message">{message}</p>}
    </div>
  );
};

export default FamilyButton;

