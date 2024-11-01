import { useSelector } from "react-redux";
import RecommendedItem from "../components/RecommendedItem";
import { useLocation } from "react-router-dom";
import InfoItem from "../components/InfoItem";
import { useEffect, useState } from "react";

function Recommended() {
  const location = useLocation();
  const items = useSelector((store) => store.items);
  const item = location.state?.item;

  const [sortOption, setSortOption] = useState("recommended");
  const searchResults = useSelector((store) => store.search.searchResults);

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const sortedItems = [...items].sort((a, b) => {
    if (sortOption === "price-low-high") {
      return a.current_price - b.current_price;
    } else if (sortOption === "price-high-low") {
      return b.current_price - a.current_price;
    } else if (sortOption === "customer-rating") {
      return b.rating.stars - a.rating.stars;
    }
    return 0;
  });

  const [isSearchPerformed, setIsSearchPerformed] = useState(false);

  useEffect(() => {
    if (searchResults && searchResults.length > 0) {
      setIsSearchPerformed(true);
    }
  }, [searchResults]);

  return (
    <>
      <main>
        <div className="items-container item-recommend-container">
          <div>
            <label className="sort-label">Your Selected Item</label>
          </div>
          <div className="slected-item">
            <InfoItem item={item} />
          </div>

          <div className="more-like">
            <label className="sort-label">More like this</label>
            <div className="custom-select-container">
              <label className="sort-label">Sort By </label>&nbsp;
              <select
                className="custom-select"
                name="sortOptions"
                id="sortOptions"
                value={sortOption}
                onChange={handleSortChange}
              >
                <option value="recommended">Recommended</option>
                <option value="price-high-low">Price: High to Low</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="customer-rating">Customer Rating</option>
              </select>
            </div>
          </div>

          <div className="more-content">
            {!isSearchPerformed ? (
              sortedItems.map((item) => (
                <RecommendedItem key={item.id} item={item} />
              ))
            ) : searchResults.length > 0 ? (
              searchResults.map((item) => (
                <RecommendedItem key={item.id} item={item} />
              ))
            ) : (
              <h3>Sorry, we couldn't find any results for your search.</h3>
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export default Recommended;
