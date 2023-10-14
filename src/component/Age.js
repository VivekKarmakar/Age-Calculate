
import React, { useState } from 'react';

const Age = () => {
 const [dateOfBirth, setDateOfBirth] = useState('');
 const [age, setAge] = useState('');

 const calculateAge = () => {
    const dob = new Date(dateOfBirth);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const month = today.getMonth() - dob.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < dob.getDate())) {
      age--;
    }
    setAge(age);
 };

 return (
    <div className="age-calculator">
      <h2>Age Calculator</h2>
      <input
        type="date"
        value={dateOfBirth}
        onChange={(e) => setDateOfBirth(e.target.value)}
      />
      <button onClick={calculateAge}>Calculate Age</button>
      {age && <p>Your are {age} years old</p>}
    </div>
 );
};

export default Age;