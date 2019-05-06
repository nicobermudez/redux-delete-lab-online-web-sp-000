export default function manageBand(state = {bands: []}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      return { ...state, bands: [...state.bands, action.name] }

    case 'DELETE_BAND':
      return {bands: state.filter(band => band.id !== action.payload)}
      
    default:
      return state;
  }
};
