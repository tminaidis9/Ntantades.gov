import React, { useState } from "react";
import "./AvailableButton.css";

const AvailableButton = () => {
  const [selectedDays, setSelectedDays] = useState([]);
  const [selectedTimes, setSelectedTimes] = useState({});
  const [currentDay, setCurrentDay] = useState("");

  const days = ["Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Σάββατο", "Κυριακή"];
  const times = [
    "6:00", "7:00", "8:00", "9:00", "10:00", "11:00", "12:00",
    "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00",
  ];

  const handleDayClick = (day) => {
    setCurrentDay(day);
    if (!selectedDays.includes(day)) {
      setSelectedDays([...selectedDays, day]);
    }
  };

const handleTimeChange = (time, allDay = false) => {
  setSelectedTimes((prev) => {
    const currentTimes = prev[currentDay] || [];

    // Αν είναι "Όλη μέρα διαθέσιμος/η", αντικατάστησε όλη τη λίστα
    if (allDay) {
      return {
        ...prev,
        [currentDay]: ["Όλη μέρα διαθέσιμος/η"],
      };
    }

    // Εναλλαγή (προσθήκη ή αφαίρεση) της ώρας
    const isTimeSelected = currentTimes.includes(time);
    const updatedTimes = isTimeSelected
      ? currentTimes.filter((t) => t !== time) // Αφαίρεση της ώρας αν υπάρχει
      : [...currentTimes, time]; // Προσθήκη της ώρας αν δεν υπάρχει

    // Ταξινόμηση των ωρών σε αύξουσα σειρά
    const sortedTimes = updatedTimes.sort((a, b) => {
      const [aHours, aMinutes] = a.split(":").map(Number);
      const [bHours, bMinutes] = b.split(":").map(Number);

      return aHours === bHours ? aMinutes - bMinutes : aHours - bHours;
    });

    return {
      ...prev,
      [currentDay]: sortedTimes,
    };
  });
};


  const clearSelections = () => {
    setSelectedDays([]);
    setSelectedTimes({});
    setCurrentDay("");
  };

  return (
    <div className="day-buttons-container">
      {/* Επιλογή ημέρας */}
      <div className="day-buttons">
        {days.map((day, index) => (
          <button
            key={index}
            className="day-button"
            onClick={() => handleDayClick(day)}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Επιλογή ώρας */}
      {currentDay && (
        <div className="time-selector">
          {times.map((time, index) => (
            <label key={index}>
              <input
                type="checkbox"
                onChange={() => handleTimeChange(time)}
                checked={selectedTimes[currentDay]?.includes(time) || false}
              />
              {time}
            </label>
          ))}
          <button onClick={() => handleTimeChange(null, true)}>Όλη μέρα διαθέσιμος/η</button>
        </div>
      )}

      {/* Περίληψη επιλογών */}
      {Object.keys(selectedTimes).length > 0 && (
        <div className="selection-summary">
          <table>
            <thead>
              <tr>
                <th>Ημέρες:</th>
                <th>Ώρες:</th>
              </tr>
            </thead>
            <tbody>
              {selectedDays.map((day, index) => (
                <tr key={index}>
                  <td>{day}</td>
                  <td>{selectedTimes[day]?.join(", ") || ""}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="buttons">
            <button className="cancel" onClick={clearSelections}>
              Ακύρωση
            </button>
        
          </div>
        </div>
      )}
    </div>
  );
};

export default AvailableButton;

