import ReactDOM from "react-dom/client"
import "./globalStyles.css"
import HomePage from "./src/pages/homePage";
import SearchPage from "./src/pages/SearchPage";



const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent); 


const productInfoCards = [
    {
      id: 1,
      title: "Remvamp",
      products: [
        {
          title: "Bands",
          img: "https://m.media-amazon.com/images/I/41oyDxViczL._AC_SY290_.jpg",
        },
        {
          title: "Protien",
          img: "https://m.media-amazon.com/images/I/917TCClIqUL._AC_SY290_.jpg",
        },
        {
          title: "Charger",
          img: "https://m.media-amazon.com/images/I/41gKPrVECbS._MCnd_AC_.jpg",
        },
        {
          title: "Laptop",
          img: "https://m.media-amazon.com/images/I/41bqWw7RkmL._MCnd_AC_.jpg",
        },
      ],
    },
    {
      id: 2,
      title: "Remvamp",
      products: [
        {
          title: "Bands",
          img: "https://m.media-amazon.com/images/I/41oyDxViczL._AC_SY290_.jpg",
        },
        {
          title: "Protien",
          img: "https://m.media-amazon.com/images/I/917TCClIqUL._AC_SY290_.jpg",
        },
        {
          title: "Charger",
          img: "https://m.media-amazon.com/images/I/41gKPrVECbS._MCnd_AC_.jpg",
        },
        {
          title: "Laptop",
          img: "https://m.media-amazon.com/images/I/41bqWw7RkmL._MCnd_AC_.jpg",
        },
      ],
    },
    {
      id: 3,
      title: "Remvamp",
      products: [
        {
          title: "Bands",
          img: "https://m.media-amazon.com/images/I/41oyDxViczL._AC_SY290_.jpg",
        },
        {
          title: "Protien",
          img: "https://m.media-amazon.com/images/I/917TCClIqUL._AC_SY290_.jpg",
        },
        {
          title: "Charger",
          img: "https://m.media-amazon.com/images/I/41gKPrVECbS._MCnd_AC_.jpg",
        },
        {
          title: "Laptop",
          img: "https://m.media-amazon.com/images/I/41bqWw7RkmL._MCnd_AC_.jpg",
        },
      ],
    },
    {
      id: 4,
      title: "Remvamp",
      products: [
        {
          title: "Bands",
          img: "https://m.media-amazon.com/images/I/41oyDxViczL._AC_SY290_.jpg",
        },
        {
          title: "Protien",
          img: "https://m.media-amazon.com/images/I/917TCClIqUL._AC_SY290_.jpg",
        },
        {
          title: "Charger",
          img: "https://m.media-amazon.com/images/I/41gKPrVECbS._MCnd_AC_.jpg",
        },
        {
          title: "Laptop",
          img: "https://m.media-amazon.com/images/I/41bqWw7RkmL._MCnd_AC_.jpg",
        },
      ],
    },
  ];


const categories = [
    "Fresh",
    "Amazon Mini-Tv",
    "Sell",
    "Best-Sellers",
    "Mobiles",
    "Gift Cards",
  ];

const  App = ()=>{ //component
    return (
        <div>
            { <HomePage productInfoCards={productInfoCards} 
                categories={categories}/> }
            {/* <SearchPage categories ={categories}/> */}
        </div>
    )
}

// root.render(App());
root.render(<App/>); //we use component
