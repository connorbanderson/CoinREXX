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
let portfolios = {
  'PTF1': {
    _meta: {
      _id: 'PTF1',
      _registryDate: 1493683200000,
      name: 'STI Dream'
    },
    coins: [],
    meta: {
      theme: 0,
      color: 0
    }
  }
}



export const updatePortfolioCoins = (id, coins) => {
  console.log('payload is, newPortfolio Coins Action');
  console.log('id is..', id);
  console.log('coins are', coins);

  return {
    type: 'UPDATE_PORTFOLIO_COINS',
    payload: {
      id,
      coins
    }
  }
}

export const newPortfolio = (payload) => {
  console.log('payload is, newPortfolio Action', payload);
  return {
    type: 'NEW PORTFOLIO',
    payload
  }
}

export default function(state = portfolios, action) {
  switch (action.type) {
    case 'NEW PORTFOLIO':
      return {
        ...state,
        [action.payload] : {
          _meta: {
            _id: [action.payload],
            _creationDate: null,
            name: null
          },
          coins: [],
          meta: {
            theme: 0,
            color: 0
          }
        }
      }
    case 'UPDATE_PORTFOLIO_COINS':
    console.log('hitting the update portfolio coinds reducer', action.payload.id, action.payload.coins);
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          coins: action.payload.coins
        }
      }
        default:
          return state;
      }
    }
