import ReactDOM from "react-dom/client";
import "./globalStyles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./src/pages/homePage";
import SearchPage from "./src/pages/SearchPage";
import SignUp from "./src/pages/signUp";
import { useState } from "react";
import ProductInfo from "./src/pages/productInfo";
import AppContext from "./src/context/appContext";

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);

const productInfoCards = [
  // {
  //   id: 1,
  //   title: "Remvamp",
  //   products: [
  //     {
  //       title: "Bands",
  //       img: "https://m.media-amazon.com/images/I/41oyDxViczL._AC_SY290_.jpg",
  //     },
  //     {
  //       title: "Protien",
  //       img: "https://m.media-amazon.com/images/I/917TCClIqUL._AC_SY290_.jpg",
  //     },
  //     {
  //       title: "Charger",
  //       img: "https://m.media-amazon.com/images/I/41gKPrVECbS._MCnd_AC_.jpg",
  //     },
  //     {
  //       title: "Laptop",
  //       img: "https://m.media-amazon.com/images/I/41bqWw7RkmL._MCnd_AC_.jpg",
  //     },
  //   ],
  // },
  // {
  //   id: 2,
  //   title: "Remvamp",
  //   products: [
  //     {
  //       title: "Bands",
  //       img: "https://m.media-amazon.com/images/I/41oyDxViczL._AC_SY290_.jpg",
  //     },
  //     {
  //       title: "Protien",
  //       img: "https://m.media-amazon.com/images/I/917TCClIqUL._AC_SY290_.jpg",
  //     },
  //     {
  //       title: "Charger",
  //       img: "https://m.media-amazon.com/images/I/41gKPrVECbS._MCnd_AC_.jpg",
  //     },
  //     {
  //       title: "Laptop",
  //       img: "https://m.media-amazon.com/images/I/41bqWw7RkmL._MCnd_AC_.jpg",
  //     },
  //   ],
  // },
  // {
  //   id: 3,
  //   title: "Remvamp",
  //   products: [
  //     {
  //       title: "Bands",
  //       img: "https://m.media-amazon.com/images/I/41oyDxViczL._AC_SY290_.jpg",
  //     },
  //     {
  //       title: "Protien",
  //       img: "https://m.media-amazon.com/images/I/917TCClIqUL._AC_SY290_.jpg",
  //     },
  //     {
  //       title: "Charger",
  //       img: "https://m.media-amazon.com/images/I/41gKPrVECbS._MCnd_AC_.jpg",
  //     },
  //     {
  //       title: "Laptop",
  //       img: "https://m.media-amazon.com/images/I/41bqWw7RkmL._MCnd_AC_.jpg",
  //     },
  //   ],
  // },
  // {
  //   id: 4,
  //   title: "Remvamp",
  //   products: [
  //     {
  //       title: "Bands",
  //       img: "https://m.media-amazon.com/images/I/41oyDxViczL._AC_SY290_.jpg",
  //     },
  //     {
  //       title: "Protien",
  //       img: "https://m.media-amazon.com/images/I/917TCClIqUL._AC_SY290_.jpg",
  //     },
  //     {
  //       title: "Charger",
  //       img: "https://m.media-amazon.com/images/I/41gKPrVECbS._MCnd_AC_.jpg",
  //     },
  //     {
  //       title: "Laptop",
  //       img: "https://m.media-amazon.com/images/I/41bqWw7RkmL._MCnd_AC_.jpg",
  //     },
  //   ],
  // },
];

const categories = [
  "Fresh",
  "Amazon Mini-Tv",
  "Sell",
  "Best-Sellers",
  "Mobiles",
  "Gift Cards",
];

const App = () => {
  //component
  const [searchText, setSearchText] = useState(""); //useState is a function and return array of size 2 [0] has name of state and [1] has func to update state
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <HomePage
          productInfoCards={productInfoCards}
          searchText={searchText}
          setSearchText={setSearchText}
          categories={categories}
        />
      ),
    },
    {
      path: "/search",
      element: (
        <SearchPage
          searchText={searchText}
          setSearchText={setSearchText}
          categories={categories}
        />
      ),
    },
    {
      path: "/search/:id",
      element: <ProductInfo />,
    },
    {
      path: "/signup", //differs from signup route of backend
      element: <SignUp />,
    },
  ]);
  const [cart, setCart] = useState([]);
  const addToCart = (elem) => {
    console.log(elem);
    const isPresent = cart.findIndex((cI) => cI.id === elem.id);
    if (isPresent === -1) {
      const newCart = [...cart];
      newCart.push({
        title: elem.title,
        id: elem.id,
        price: elem.price,
        count: 1,
      });
      setCart(newCart);
    } else {
      const newCart = cart.map((cartItem) => {
        if (cartItem.id === elem.id) {
          const newCartItem = { ...cartItem };
          newCartItem.count = newCartItem.count + 1;
          return newCartItem;
        } else return cartItem;
      });
      setCart(newCart);
    }
  };

  const contextValues = {
    cart,
    addToCart,
    categories,
    searchText,
    setSearchText,
  };
  console.log(cart);

  return (
    <AppContext.Provider value={contextValues}>
      <RouterProvider router={router} />;
    </AppContext.Provider>
  );
};

// root.render(App());
root.render(<App />); //we use component
