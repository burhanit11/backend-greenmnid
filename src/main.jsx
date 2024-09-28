import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/about/About.jsx";
import Products from "./pages/products/Products.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Signup from "./pages/signup/Signup.jsx";
import Login from "./pages/login/Login.jsx";
import Checkout from "./pages/checkout/Checkout.jsx";
import CartDetails from "./pages/cartDetails/CartDetails.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./pages/profile/Profile.jsx";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/checkout",
    element: (
      <ProtectedRoute>
        <Checkout />
      </ProtectedRoute>
    ),
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/products/cartdetails/:id",
    element: <CartDetails />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);
<ToastContainer
  position="top-right"
  autoClose={5000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="light"
  // transition: Bounce,
/>;
{
  /* Same as */
}
<ToastContainer />;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
