export default function manageBand(state = {bands: []}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      return { ...state, bands: [...state.bands, action.name] }
      
    case 'DELETE_BAND':
      return {}
    default:
      return state;
  }
};
