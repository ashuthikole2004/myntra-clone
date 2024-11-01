import { useSelector } from "react-redux";
import HomeItem from "../components/HomeItem";
import Carousels from "../components/Carousels";
import { useEffect, useState } from "react";

function Home() {
  const items = useSelector((store) => store.items);
  const searchResults = useSelector((store) => store.search.searchResults);
  const [isSearchPerformed, setIsSearchPerformed] = useState(false);

  useEffect(() => {
    if (searchResults && searchResults.length > 0) {
      setIsSearchPerformed(true);
    }
  }, [searchResults]);

  return (
    <>
      <main>
        <Carousels />
        <div className="items-container">
          {!isSearchPerformed ? (
            items.map((item) => <HomeItem key={item.id} item={item} />)
          ) : searchResults.length > 0 ? (
            searchResults.map((item) => <HomeItem key={item.id} item={item} />)
          ) : (
            <h3>Sorry, we couldn't find any results for your search.</h3>
          )}
        </div>
      </main>
    </>
  );
}

export default Home;
