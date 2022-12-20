

const url = "https://pokeapi.co/api/v2/pokemon/?limit=151";
const div = document.querySelector(".pokemon");

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    let pokemons = data.results;
    pokemons.forEach(pokemon => {      
      let pokeUrl = pokemon.url;
      div.innerHTML += `<div class="pokeCard"><h3>${pokemon.name}</h3></div>`;
      fetch(pokeUrl)
        .then(response => response.json())
        .then(data => {
        let pokeCard = document.querySelectorAll('.pokeCard');
          // console.log(data.types[0].type.name); 
          data.types.forEach(poke => {
            // console.log(typ.type.name);
            pokeCard.innerHTML += `<p>${poke.type.name}</p>`;  
          })
        });
    });
  })
  .catch((error) => {
    console.log(error);
  });