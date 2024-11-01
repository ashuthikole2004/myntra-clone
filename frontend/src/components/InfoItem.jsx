import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bagActions } from '../store/bagSlice';
import { wishlistActions } from '../store/wishlistSlice';
import { IoMdHeartDislike } from 'react-icons/io';
import { AiOutlineHeart } from 'react-icons/ai';
import { MdAddCircleOutline, MdDelete } from 'react-icons/md';

function InfoItem({item}) {
  const dispatch = useDispatch();

  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(item.id));
  };

  const handleRemoveFromBag = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };

  const bag = useSelector((store) => store.bag);

  const wishlist = useSelector((store) => store.wishlist);

  const handleAddToWishList = () => {
    dispatch(wishlistActions.addToWishList(item.id));
  };

  const handleRemoveFromWishList = () => {
    dispatch(wishlistActions.removeFromWishList(item.id));
  };
    return (
        <div>
            <div className="bag-item-container">
              <div className="item-left-part">
                <img className="bag-item-img" src={item.image} />
                
              </div>
              
              <div className="item-right-part">
                <div className="company">{item.company}</div>
                <div className="item-name">{item.item_name}</div>
                <div className="price-container">
                  <span className="current-price">Rs {item.current_price}</span>
                  <span className="original-price">
                    Rs {item.original_price}
                  </span>
                  <span className="discount-percentage">
                    ({item.discount_percentage}% OFF)
                  </span>
                </div>
                <div className="return-period">
                  <span className="return-period-days">
                    {item.return_period} days
                  </span>{" "}
                  return available
                </div>
                <div className="delivery-details">
                  Delivery by{" "}
                  <span className="delivery-details-days">
                    {item.delivery_date}
                  </span>
                </div>
              </div>
              {wishlist.includes(item.id) ? (
          <button
            className="wishlist-button btn1"
            onClick={handleRemoveFromWishList}
          >
            <IoMdHeartDislike />
          </button>
        ) : (
          <button className="wishlist-button" onClick={handleAddToWishList}>
            <AiOutlineHeart />
          </button>
        )}
            </div>
            {bag.includes(item.id) ? (
          <button className="btn-remove-bag" onClick={handleRemoveFromBag}>
            <MdDelete /> Remove from Bag
          </button>
        ) : (
          <button className="btn-add-bag" onClick={handleAddToBag}>
            <MdAddCircleOutline /> Add to Bag
          </button>
        )}
        </div>
    );
}

export default InfoItem;