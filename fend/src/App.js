import React, { useState } from "react";

const RegistrationForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [age, setAge] = useState("");

  // const validateForm = () => {
  //   if (firstName.length === 0) {
  //     alert("First name is required");
  //     return false;
  //   }
  //   if (lastName.length === 0) {
  //     alert("Last name is required");
  //     return false;
  //   }
  //   if (!email.match(/^[\w-.]+@[\w-]+\.[a-z]{2,3}$/)) {
  //     alert("Invalid email address");
  //     return false;
  //   }
  //   // if (country.length === 0) {
  //   //   alert("Country is required");
  //   //   return false;
  //   // }
  //   // if (state.length === 0) {
  //   //   alert("State is required");
  //   //   return false;
  //   // }
  //   // if (city.length === 0) {
  //   //   alert("City is required");
  //   //   return false;
  //   // }
  //   if (gender.length === 0) {
  //     alert("Gender is required");
  //     return false;
  //   }
  //   if (dateOfBirth.length === 0) {
  //     alert("Date of birth is required");
  //     return false;
  //   }
  //   return true;
  // };

  const handleSubmit = async () => {
    // if (!validateForm()) {
    //   return;
    // }
  
  
    const submitResponse = await fetch("http://localhost:3000/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        country,
        state,
        city,
        gender,
        dateOfBirth
      }),
    });
  
    
  }
  

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <select value={country} onChange={(e) => setCountry(e.target.value)}>
        <option value="">Country</option>
        {/* TODO: Populate the list of countries from the database */}
      </select>
      <select value={state} onChange={(e) => setState(e.target.value)}>
        <option value="">State</option>
        {/* TODO: Populate the list of states from the database */}
      </select>
      <select value={city} onChange={(e) => setCity(e.target.value)}>
        <option value="">City</option>
        {/* TODO: Populate the list of cities from the database */}
      </select>
      <input
        type="radio"
        name="gender"
        value="Male"
        checked={gender === "Male"}
        onChange={(e) => setGender(e.target.value)}
      />
      Male
      <input
        type="radio"
        name="gender"
        value="Female"
        checked={gender === "Female"}
        onChange={(e) => setGender(e.target.value)}
      />
      Female
      <input
        type="date"
        placeholder="Date of Birth"
        value={dateOfBirth}
        onChange={(e) => setDateOfBirth(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default RegistrationForm;
