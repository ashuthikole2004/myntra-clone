import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./route/App.jsx";
import Home from "./route/Home.jsx";
import Bag from "./route/Bag.jsx";
import { Provider } from "react-redux";
import myntraStore from "./store/index.js";
import Wishlist from "./route/Wishlist.jsx";
import Recommended from "./route/Recommended.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "bag",
        element: <Bag />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },
      {
        path: "recommended",
        element: <Recommended />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={myntraStore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
