import React, { useState } from "react";

function PersonCard({ firstName, lastName, initialAge }) {
  // State for each person's details
  const [person, setPerson] = useState({
    firstName,
    lastName,
    age: initialAge,
  });

  // Function to increment the age
  const incrementAge = () => {
    setPerson({ ...person, age: person.age + 1 });
  };

  return (
    <div className="text-center border border-secondary rounded p-3 mb-3">
      <h5 className="text-center">Person Information</h5>
      <p className="text-center fs-4 text-primary">
        Full Name: {person.firstName} {person.lastName}
      </p>
      <p className="text-center fs-5 text-success">Age: {person.age}</p>
      <button className="btn btn-primary" onClick={incrementAge}>
        Celebrate Birthday for {person.firstName}
      </button>
    </div>
  );
}

export default PersonCard;
