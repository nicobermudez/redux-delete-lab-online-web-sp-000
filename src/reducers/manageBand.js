export default function manageBand(state = {bands: []}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      const todo = {
        id: Math.random()*10000000000000000,
        text: action.payload.text
      }
      return { ...state, bands: [...state.bands, action.name] }

    case 'DELETE_BAND':
      return {bands: state.filter(band => band.id !== action.payload)}

    default:
      return state;
  }
};
