// ------------------------------------
// Constants
// ------------------------------------


// ------------------------------------
// Actions
// ------------------------------------


// ------------------------------------
// Reducer
// ------------------------------------


export const updateCoins = (id) => {
  console.log('updating coins');
  return {
    type: 'UPDATE',
    payload: id
  }
}

export default function(state = null, action) {
  console.log('hitting reducer', action.payload);
  switch (action.type) {
    case 'UPDATE':
    console.log('updating 200', action.payload);
    return {...state, ...action.payload}
    default:
      return state;
  };
};
