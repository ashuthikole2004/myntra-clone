import { useDispatch, useSelector } from "react-redux";
import { MdAddCircleOutline, MdDelete } from "react-icons/md";
import { wishlistActions } from "../store/wishlistSlice";
import { IoMdHeartDislike } from "react-icons/io";
import { bagActions } from "../store/bagSlice";

const WishlistItem = ({ item }) => {
  const dispatch = useDispatch();
  const handleRemoveWishlist = () => {
    dispatch(wishlistActions.removeFromWishList(item.id));
  };

  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(item.id));
  };

  const handleRemoveFromBag = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };

  const bag = useSelector((store) => store.bag);

  return (
    <>
      <div className="item-container">
        <img className="item-image" src={item.image} alt="item image" />

        <button className="wishlist-button btn1" onClick={handleRemoveWishlist}>
          <IoMdHeartDislike />
        </button>

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
    </>
  );
};

export default WishlistItem;
