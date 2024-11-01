import React, { useEffect, useState } from "react";
import BagSummary from "../components/BagSummary";
import BagItem from "../components/BagItem";
import { useSelector } from "react-redux";
function bag() {
  const bag = useSelector((store) => store.bag);
  const items = useSelector((store) => store.items);
  const bagItems = items.filter((item) => bag.includes(item.id));
  const searchResults = useSelector((store) => store.search.searchResults);
  const [isSearchPerformed, setIsSearchPerformed] = useState(false);

  useEffect(() => {
    if (searchResults && searchResults.length > 0) {
      setIsSearchPerformed(true);
    }
  }, [searchResults]);
  return (
    <div>
      <center>
        <div className="bag-page">
          {!isSearchPerformed ? (
            bagItems.map((item) => <BagItem key={item.id} item={item} />)
          ) : searchResults.length > 0 ? (
            searchResults.map((item) => <BagItem key={item.id} item={item} />)
          ) : (
            <h3>Sorry, we couldn't find any results for your search.</h3>
          )}
          <div>
            <BagSummary />
          </div>
        </div>
      </center>
    </div>
  );
}

export default bag;
