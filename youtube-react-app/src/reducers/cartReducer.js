const cartReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.payload];

    case 'FETCH_CART':
      return state;

    default:
      return state;
  }
};

export default cartReducer;
