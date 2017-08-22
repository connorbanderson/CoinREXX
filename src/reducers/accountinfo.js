import omit from 'lodash/omit'

// ------------------------------------
// Constants
// ------------------------------------


// ------------------------------------
// Actions
// ------------------------------------


// ------------------------------------
// Reducer
// ------------------------------------
let accountinfo ={
  'ACT-1': {
    _meta: {
      _id: 'ACT-1',
      _registryDate: 1493683200000,
      _endOfLifeDate: null
    },
    portfolios: {
        coins: ['Empty'],
        name: 'Portfolio 1'
    },
    nops: {
      current: ['NOP-1', 'NOP-2', 'NOP-3', 'NOP-4'],
      history: []
    },
    roles: {
      current: ['ROLE-SA'],
      history: []
    },
    users: {
      current: ['ACT-USER-2'],
      history: []
    },
    meta: {
      theme: 0,
      color: 0
    }
  }
}



export const updateUserTheme = (id) => {
  console.log('calling the action with Id', id);
  return {
    type: 'UPDATE_USER_THEME',
    payload: id
  }
}

export const updatePortfolio = (payload) => {
  console.log('payload is', payload);
  return {
    type: 'UPDATE_USER_PORTFOLIO',
    payload
  }
}




export default function(state = accountinfo, action) {
  switch (action.type) {
    case 'UPDATE_USER_THEME':
      return {
        ...state,
        ['ACT-1']: {
          ...state['ACT-1'],
          meta: {
            ...state['ACT-1'].meta,
            theme: action.payload
          }
        }
      }
    case 'UPDATE_USER_PORTFOLIO':
    console.log('hitting the update portfolio reducer', action.payload);
      return {
        ...state,
        ['ACT-1']: {
          ...state['ACT-1'],
          portfolios: {
            ...state['ACT-1'].portfolios,
            coins: action.payload
            }
          }
        }
        default:
          return state;
      }
    }
