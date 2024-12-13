import '../App.css';

const PersonCard = (props) => {
    const { firstName, lastName, age, hairColor } = props; 
    return (
        <div className="personCard">
            
            <h1>{`${lastName}, ${firstName}`}</h1>
            <h4>Age: {age}</h4>
            <h4>Hair color: {hairColor}</h4>
        </div>
    );
};

export default PersonCard;
