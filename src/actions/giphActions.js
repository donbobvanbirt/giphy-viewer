import axios from 'axios';

export function searchGiphs(search) {
  return {
    type: 'SEARCH_GIFS',
    payload: axios.get(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC`)
      .then(res => res.data)
  }
}

export function getGiphById(id) {
  return {
    type: 'GET_GIPH',
    payload: axios.get(`http://api.giphy.com/v1/gifs/${id}?api_key=dc6zaTOxFJmzC`)
      .then(res => res.data)
  }
}
