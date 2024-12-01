const pokemon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 35,  "name": "Clefairy",   "types": ["normal"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);
console.log("********************************************************************************")
/************************************************************************************ */
const pkmnIds = pokemon.map(p => p.id);  // Extract all Pokémon IDs

// Filter the Pokémon objects where their ID is divisible by 3
const findPokemonIDBy3 = () => {
    return pokemon.filter(pokemon => pokemon.id % 3 === 0);
};

console.log(findPokemonIDBy3());
console.log("********************************************************************************")

/************************************************************************************ */
/* Find an array of pokémon objects that are "fire" type */

const findFireTypePokemon = () => {
    let fireTypePokemon = []; // Initialize an empty array to store matching Pokémon

    // Iterate through each Pokémon in the array
    pokemon.forEach(pokemon => {
        // Check if the Pokémon's types array contains "fire"
        pokemon.types.forEach(type => {
            if (type === "fire") {
                fireTypePokemon.push(pokemon); // Add Pokémon to the array if it has "fire" type
            }
        });
    });

    return fireTypePokemon;
};

console.log(findFireTypePokemon());

console.log("********************************************************************************")

/************************************************************************************ */
/* Find pokémon of array os that have more than one type */

console.log("********************************************************************************")

const findMoreThanOneTypePokemon = () => {
    let multiTypePokemon = []; // Initialize an empty array to store matching Pokémon

    // Iterate through each Pokémon in the array
    pokemon.forEach(pokemon => {
        // Check if the Pokémon has more than one type (i.e., the length of the types array is greater than 1)
        if (pokemon.types.length >= 2) {
            multiTypePokemon.push(pokemon); // Add Pokémon to the array if it has more than one type
        }
    });

    return multiTypePokemon;
};

console.log(findMoreThanOneTypePokemon());

/************************************************************************************ */
/* Find an array with only name of pokémon */

console.log("*************************************PokémonName*******************************************")
const pokemonNames = pokemon.map(p => p.name);
console.log(pokemonNames);
/************************************************************************************ */
console.log("**********************************id sup 99**********************************************")
/* Find an array with only name of pokémon  and id sup 99*/
const pokemon99 = pokemon
  .filter(p => p.id > 99)
  .map(p => ({ id: p.id, name: p.name }));

console.log(pokemon99);

console.log("**********************************name of pokemon type poison**********************************************")
/* Find an array with only name of pokémon  and type poison*/
const pokemonpoison = pokemon
  .filter(p => p.types == 'poison')
  .map(p => ({name: p.name, Type: p.types}));

console.log(pokemonpoison);

console.log("**********************************Find second Type**********************************************")
/* Find second type Flying*/

// Get the first type of Pokémon whose second type is 'flying'

// Get the ID and first type of Pokémon whose second type is 'flying'
const idAndFirstTypeWithSecondFlying = findMoreThanOneTypePokemon() // Call the function
  .filter(p => p.types[1] === 'flying') // Check if the second type is 'flying'
  .map(p => ({ id: p.id, firstType: p.types[0] })); // Extract the id and first type

console.log(idAndFirstTypeWithSecondFlying);

console.log("**********************************Count Normal**********************************************")
/* Count Normal*/

console.log("**********************************Count Pokémon with Type 'Normal' using forEach**********************************************");

let countNormalPokemon = 0; // Initialize the count

pokemon.filter(p => p.types.includes('normal'))
  .forEach(() => {
    countNormalPokemon++; 
  });

console.log(`Number of Pokémon with type 'normal': ${countNormalPokemon}`);

console.log("**********************************Not148**********************************************")
/* Count Not148*/
const Not148 = pokemon
  .filter(p => p.id !== 148)  //filter out Pokémon with id 148
  .map(p => ({ id: p.id, name: p.name, types: p.types }));  

console.log(Not148);
console.log("**********************************Id35normal to fairy**********************************************")
/* Count id 35 noraml to fairy*/
/* Change type from 'normal' to 'fairy' for Pokémon with id 35 */
const updatedPokemon = pokemon
  .map(p => {
    if (p.id === 35) {
      
      return { ...p, types: p.types.map(type => type === 'normal' ? 'fairy' : type) };
    }
    return p;  
  });

console.log(updatedPokemon);  
