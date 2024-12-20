import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import WishlistItem from "../components/WishlistItem";
function Wishlist() {
  const wishlist = useSelector((store) => store.wishlist);
  const items = useSelector((store) => store.items);
  const wishlistItem = items.filter((item) => wishlist.includes(item.id));
  const searchResults = useSelector((store) => store.search.searchResults);
  const [isSearchPerformed, setIsSearchPerformed] = useState(false);

  useEffect(() => {
    if (searchResults && searchResults.length > 0) {
      setIsSearchPerformed(true);
    }
  }, [searchResults]);
  return (
    <div>
      <main>
        <div className="wish-page">
          <div className="wishlist-text">
            <h6>
              {" "}
              Wishlist Items{" "}
              <span className="wush-btn">{wishlistItem.length}</span>
            </h6>
          </div>
          <div className="wishlist-items-container">
            {wishlistItem.map((item) => (
              <WishlistItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Wishlist;
