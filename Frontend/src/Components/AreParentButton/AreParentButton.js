import React, { useState } from "react";
import "./AreParentButton.css";

const AreParentButton = () => {
  const [gender, setGender] = useState("");
  const [message, setMessage] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleIconClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleGenderSelect = (selectedGender) => {
    setGender(selectedGender);
    setShowDropdown(false);
    setMessage("Η Επιλογή σας καταχωρήθηκε επιτυχώς!");
    setTimeout(() => {
      setMessage("");
    }, 5000);
  };

  return (
    <div className="areparent-button-container">
      <label htmlFor="areparent-input" className="input-label">
        Είστε Γονέας
      </label>
      <div className="input-wrapper">
        <input
          id="areparent-input"
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
          <div className="areparent-dropdown">
            {["Ναι", "Όχι"].map((option) => (
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

export default AreParentButton;