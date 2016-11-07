import axios from 'axios';

export function searchGiphs(search) {
  return {
    type: 'SEARCH_GIFS',
    payload: axios.get(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC
`)
      .then(res => res.data)
  }
}

// function receivePokemon(pokemon) {
//   return {
//     type: 'RECEIVE_POKEMON',
//     payload: pokemon
//   }
// }
//
// function fetchPokemonError(err) {
//   return {
//     type: 'FETCH_POKEMON_ERROR',
//     payload: err
//   }
// }
//
// function fetchPokemonStart(err) {
//   return {
//     type: 'FETCH_POKEMON_START'
//   }
// }
//
// export function fetchPokemon(pokemonId) {
//   return dispatch => {
//     dispatch(fetchPokemonStart)
//     axios.get(`http://pokeapi.co/api/v2/pokemon/${pokemonId}`)
//       .then(res => res.data)
//       .then(pokemon => {
//         dispatch(receivePokemon(pokemon))
//       })
//       .catch(err => {
//         dispatch(fetchPokemonError(err));
//       })
//   }
// }
