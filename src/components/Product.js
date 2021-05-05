import React from 'react';
import { useStateValue } from '../ReactContextAPI/StateProvider';
import './Product.css';
const Product = ({ id, title, price, rating, image }) => {
  console.log('Product');
  const [, dispatch] = useStateValue();
  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        image: image,
      },
    });
  };
  return (
    <div className='product'>
      <div className='product__info'>
        <p className='product__title'>{title}</p>
        <p className='product__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='product__rating'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              // key is waiting for id
              <p key={i}>&#11088;</p>
            ))}
        </div>
      </div>
      <img src={image} alt='Product' className='product__image' />
      <button className='product__addToBasket' onClick={handleAddToCart}>
        Add to Basket
      </button>
    </div>
  );
};
export default Product;
