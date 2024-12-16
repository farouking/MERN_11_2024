import React from "react";
import "./App.css";
import PersonCard from "./components/PersonCard";

function App() {
  // Array of people
  const people = [
    { firstName: "Farouk", lastName: "Souissi", initialAge: 37 },
    { firstName: "John", lastName: "Doe", initialAge: 25 },
    { firstName: "Jane", lastName: "Smith", initialAge: 30 },
    { firstName: "Alice", lastName: "Johnson", initialAge: 22 },
  ];

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">People List</h1>
      {people.map((person, index) => (
        <PersonCard
          key={index} // Key to uniquely identify each person in the list
          firstName={person.firstName}
          lastName={person.lastName}
          initialAge={person.initialAge}
        />
      ))}
    </div>
  );
}

export default App;
