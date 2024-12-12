import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <>
      
      <PersonCard 
        firstName="Farouk" 
        lastName="SOUISSI" 
        age={42} 
        hairColor="Black" 
      />
      <PersonCard 
        firstName="Yaya" 
        lastName="DEMBELE" 
        age={27} 
        hairColor="Black" 
      />
      <PersonCard 
        firstName="Bob" 
        lastName="JOHNSON" 
        age={45} 
        hairColor="Red" 
      />
    </>
  );
}

export default App;

