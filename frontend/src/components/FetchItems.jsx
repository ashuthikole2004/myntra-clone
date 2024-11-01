import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemActions } from "../store/itemSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";
import { searchActions } from "../store/searchSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchStatusActions.markFetchStarted());

    fetch("https://myntra-clone-1-snz6.onrender.com/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(fetchStatusActions.markFetchDone());
        dispatch(fetchStatusActions.markFetchFinished());
        dispatch(itemActions.addInitialItem(items));
        dispatch(searchActions.setItems(items));
      });

    return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  return <></>;
};

export default FetchItems;
