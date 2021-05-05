export const initialState = {
  products: [
    {
      id: 10,
      title:
        'The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback',
      price: 19.99,
      rating: 5,
      image:
        'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg',
    },
    {
      id: 11,
      title:
        'Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl',
      price: 239,
      rating: 4,
      image:
        'https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg',
    },
    {
      id: 12,
      title: "Samsung LC49RG90SSUXEN 49'  Curved LED Gaming Monitor",
      price: 199.99,
      rating: 3,
      image:
        'https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg',
    },
    {
      id: 13,
      title:
        'Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric',
      price: 98.99,
      rating: 5,
      image:
        'https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$',
    },
    {
      id: 14,
      title:
        'New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)',
      price: 598.99,
      rating: 4,
      image:
        'https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg',
    },
    {
      id: 15,
      title:
        "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",
      price: 1094.98,
      rating: 4,
      image:
        'https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg',
    },
  ],
  basket: [
    {
      id: 10,
      title:
        'The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback',
      price: 19.99,
      rating: 5,
      image:
        'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg',
    },
    {
      id: 11,
      title:
        'Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl',
      price: 239,
      rating: 4,
      image:
        'https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg',
    },
    {
      id: 12,
      title: "Samsung LC49RG90SSUXEN 49'  Curved LED Gaming Monitor",
      price: 199.99,
      rating: 3,
      image:
        'https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg',
    },
    {
      id: 13,
      title:
        'Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric',
      price: 98.99,
      rating: 5,
      image:
        'https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$',
    },
    {
      id: 14,
      title:
        'New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)',
      price: 598.99,
      rating: 4,
      image:
        'https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg',
    },
    {
      id: 15,
      title:
        "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",
      price: 1094.98,
      rating: 4,
      image:
        'https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg',
    },
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case 'REMOVE_FROM_BASKET':
      const index = state.basket.findIndex((item) => item.id === action.id);
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`Doesn't exist item with id:${action.id}`);
      }
      return {
        ...state,
        basket: newBasket,
      };
    case 'SET_USER':
      return { ...state, user: action.user };
    default:
      return state;
  }
};

export const getBasketTotal = (basket) =>
  basket.reduce((amount, item) => amount + item.price, 0);

export default reducer;
