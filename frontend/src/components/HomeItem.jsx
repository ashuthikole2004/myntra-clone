import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { wishlistActions } from "../store/wishlistSlice";
import { MdAddCircleOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { IoMdHeartDislike } from "react-icons/io";
import { Link } from "react-router-dom";

function HomeItem({ item }) {
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

  // const handleOnHover=()=>{
  //   const wishItem=document.querySelector(".wishlist-button");
  //   wishItem.classList.remove("display-none");
  // }
  return (
    <div className="item-container home-item-container">
      <Link to="recommended" className="item-link" state={{ item }}>
        <img className="item-image" src={item.image} alt="item image" />
      </Link>
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
      <div className="back-color">
        <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>
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

export default HomeItem;
