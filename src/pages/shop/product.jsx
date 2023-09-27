/** @format */

import React, { useContext, useState } from 'react';
import { ShopContext } from '../../context/shop-context';
import { FaStar } from 'react-icons/fa';
export const Product = (props) => {
  const { id, productName, price, productImage, des } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];
  const [rating, setRating] = useState(5);
  const [hover, setHover] = useState(null);
  return (
    <div className='product'>
      <img src={productImage} alt={productName} />
      <div className='description'>
        <p className='name'>
          <b>{productName}</b>
        </p>
        <p className='price'>
          <b>Price:</b> ${price}
        </p>
        <p className='des'>
          <b id='Des'>Des:</b>
          {des}
        </p>
      </div>
      <div>
        <p className='rat'>
          <b> Ratings:</b>
          {[...Array(5)].map((star, i) => {
            const ratingVal = i + 1;

            return (
              <label>
                <input
                  type='radio'
                  name='rating'
                  value={ratingVal}
                  onClick={() => setRating(ratingVal)}
                />
                <FaStar
                  className='star'
                  onMouseEnter={() => setHover(ratingVal)}
                  onMouseLeave={() => setHover(null)}
                  color={ratingVal <= (hover || rating) ? 'yellow' : 'grey'}
                />
              </label>
            );
          })}
        </p>
      </div>
      <button className='addToCartBttn' onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};
