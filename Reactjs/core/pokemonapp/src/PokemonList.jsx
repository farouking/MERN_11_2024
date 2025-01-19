import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PokemonList = () => {
  const [pokemonNames, setPokemonNames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonNames = async () => {
      try {
        const pokemonData = [];
        for (let i = 1; i <= 151; i++) {
          const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
          pokemonData.push(response.data.name);
        }
        setPokemonNames(pokemonData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Pokémon data', error);
        setLoading(false);
      }
    };

    fetchPokemonNames();
  }, []);

  return (
    <div>
      <h1>First 151 Pokémon</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {pokemonNames.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PokemonList;
