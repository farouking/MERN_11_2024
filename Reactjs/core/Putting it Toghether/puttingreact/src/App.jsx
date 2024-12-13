import { useState } from 'react';
import './App.css';

function App() {
  //! First Hooks : useState
  //* useState: is a hook that allows us to create a memory-space (state) that is shared each time
  //*           the component is re-rendering by React.
  //*1. Import useState from react
  //*2. Create our State variable:
  const [count, setCount] = useState(0);

  //* State Management:
  
  //* State with object:
  const [person, setPerson] = useState({
    firstName: "Farouk",
    lastName: "Souissi",
    age: 37,
  });

  //* State that allows us to change value for Age
  const incrementAge = () => {
    setPerson({ ...person, age: person.age + 1 });
  };

  return (
    <>
      
        <div className="text-center">
          <h5 className="text-center">Person Information of State using Object</h5>
          <p className="text-center fs-1 text-success">
            Fullname: {person.firstName} {person.lastName}
          </p>
          <p className="text-center fs-1 text-success">Age: {person.age}</p>
          <button
            className="btn btn-secondary"
            onClick={incrementAge}
          >
            Celebrate Birthday for {person.firstName}
          </button>
        </div>
      
    </>
  );
}

export default App;
