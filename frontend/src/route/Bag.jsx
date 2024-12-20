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
          {searchResults.map((item) => (
            <BagItem key={item.id} item={item} />
          ))}
          <div>
            <BagSummary />
          </div>
        </div>
      </center>
    </div>
  );
}

export default bag;
