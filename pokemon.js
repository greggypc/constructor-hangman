

const pokemon = require('pokemon');

var randomPokemon = pokemon.random();
console.log(randomPokemon);

// do I really need a constructor here?
// var newWordPokemon = function() {
//   this.randomPokemon = pokemon.random();
// };

module.exports = randomPokemon;
