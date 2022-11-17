const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

function convertPokemonToLi(pokemon) {
    return `<li class="pokemon">
    <span class="number">#001</span>
    <span class="name">${pokemon.name}</span>

    <div class="detail">
      <ol class="types">
        <li class="type">grass</li>
        <li class="type">poison</li>            </ol>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="${pokemon.Name}">

      

    </div>
    
  </li>
  `
}


//processamento assíncrono = uma hora a resposta chega! 
fetch(url)
    .then((response) => response.json()) //arrow function: sintaxe reduzida para funções simples, anônimas, como callback
    .then((jsonBody) => jsonBody.results)
    .then((pokemonList) => {
        for (let i = 0; pokemonList.length;) {
            const pokemon = pokemonList [i];
            console.log(convertPokemonToLi(pokemon))
            
        }

        
})
    .catch((error) => console.error(error))
    


