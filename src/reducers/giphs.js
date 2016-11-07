export default function giphs(state = null, action) {
  if (action.error) {
    return state;
  }

  switch (action.type) {
    case 'SEARCH_GIFS_FULFILLED':
      return action.payload;
    default:
      return state;
  }
}
