import React, { useState } from "react";
import "./HostButton.css";

const HostButton = () => {
  const [gender, setGender] = useState("");
  const [message, setMessage] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleIconClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleGenderSelect = (selectedGender) => {
    setGender(selectedGender);
    setShowDropdown(false);
    setMessage("Η Επιλογή καταχωρήθηκε επιτυχώς!");
    setTimeout(() => {
      setMessage("");
    }, 5000);
  };

  return (
    <div className="host-button-container">
      <label htmlFor="host-input" className="input-label">
        Υπάρχει δυνατότητα φιλοξενείας στο σπίτι σας ;
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

export default HostButton;