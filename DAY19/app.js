import ReactDOM from "react-dom/client";
import "./globalStyles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./src/pages/homePage";
import SearchPage from "./src/pages/amazonSearchPage";
import SignUp from "./src/pages/signUp";
import { useState } from "react";
import ProductInfo from "./src/pages/productInfo";
import AppContext from "./src/context/appContext";
import Login from "./src/pages/login";

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
  const [cart, setCart] = useState([]);
  const [searchText, setSearchText] = useState(""); //useState is a function and return array of size 2 [0] has name of state and [1] has func to update state
  const [loggedInUser, setLoggedInUser] = useState(null); 
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: !loggedInUser ? <SignUp/> : (
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
      element:  !loggedInUser ? <SignUp/> :(
        <SearchPage
          searchText={searchText}
          setSearchText={setSearchText}
          categories={categories}
        />
      ),
    },
    {
      path: "/search/:id",
      element:  !loggedInUser ? <SignUp/> :<ProductInfo />,
    },
    {
      path: "/signup", //differs from signup route of backend
      element:  loggedInUser ? <HomePage/> :<SignUp />,
    },
    {
      path: "/login", //differs from signup route of backend
      element:  loggedInUser ? <HomePage/> :<Login />,
    },
  ])
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

  const appLogin = (user) =>{
    setLoggedInUser(user);
  }

  const contextValues = {
    loggedInUser,
    cart,
    addToCart,
    categories,
    searchText,
    setSearchText,
    appLogin,
  };
  console.log("state" , loggedInUser);

  return (
    <AppContext.Provider value={contextValues}>
      <RouterProvider router={router} />; 
    </AppContext.Provider>
  );
};

// root.render(App());
root.render(<App />); //we use component
