const url = 'https://httpbin.org/post';

async function getPokemonData(query){
    
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`)

    return await response.json()

}

async function fetchData(event){

    event.preventDefault();
    const search = event.target.elements.pokemon.value;
    const result = await getPokemonData(search);
    console.log(result);
    displayPokemon(result);

}

async function displayPokemon(pokemon) {

    const capitalizedPokemonName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

    const abilities = pokemon.abilities.map(ability => `<li>${ability.ability.name.charAt(0).toUpperCase() + ability.ability.name.slice(1)}</li>`).join('');

    const types = pokemon.types.map(type => `<li>${type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}</li>`).join('');

    const stats = pokemon.stats.map(stat => `<li>${stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1)}: ${stat.base_stat}</li>`).join('');

    const html = `<div class="card1">
                    <img src="${pokemon.sprites.front_default}" alt="${capitalizedPokemonName}">
                        <div>
                            <h2>${capitalizedPokemonName}</h2>
                            <p>Types:</p>
                            <ul>${types}</ul>
                            <p>Abilities:</p>
                            <ul>${abilities}</ul>
                            <p>Stats:</p>
                            <ul>${stats}</ul>
                        <div>
                </div>`;
                
    const div = document.getElementsByClassName('search')[0];
    
    div.insertAdjacentHTML('beforeend', html);

};