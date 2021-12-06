const fetch = require('node-fetch');
const fs = require('fs');

const arguments = process.argv;

if (Array.isArray(arguments) && arguments.length > 2) {
    arguments.splice(0, 2);

    if (hasInvalidNumber(arguments)) {
        return console.log('Valor(es) inválido(s) informado(s)!');
    }

    getPokemons(arguments);
}

function hasInvalidNumber(numbers) {
    return !!numbers.find(number => number < 1 || number > 893 || isNaN(number));
}

async function getPokemons(arguments) {
    const pokemons = [];

    for (const number of arguments) {
        console.log(`***** Buscando Pokémon: ${number} *****`);

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}`);

        if (response.status == 200) {
            const data = await response.json();

            const pokemon = {
                id: data.id,
                name: data.name,
                sprites: {
                    front_default: data.sprites.front_default
                },
                height: data.height,
                weight: data.weight,
                types: data.types
            };

            pokemons.push(pokemon);

            console.log(pokemon);
        } else {
            console.error('API Error');
        }
    }

    if (pokemons.length) {
        savePokemons(pokemons);
    }
}

function savePokemons(pokemons) {
    pokemons.forEach(pokemon => {
        console.log(`***** Salvando Pokémon: ${pokemon.name} *****`);

        fs.writeFileSync(`./${pokemon.name}_${pokemon.id}`, JSON.stringify(pokemon));
    });
}