export default function detail(state = null, action) {
  if (action.error) {
    return state;
  }

  switch (action.type) {
    case 'GET_GIPH_FULFILLED':
      return action.payload;
    default:
      return state;
  }
}
