import { useContext } from "react";
import CategoryBar from "../components/categoryBar";
import Navbar from "../components/navbar";
import useGetProducts from "../hooks/useGetProducts";
import AppContext from "../context/appContext";

const SearchPage = (props) => {
  const { categories } = props;
  const products = useGetProducts();
  const { addToCart } = useContext(AppContext);

  const customStyles = {
    padding: "48px",
    textAlign: "center",
    backgroundColor: "Yellow",
  };

  // let searchText = "";
  console.log("initially: ", searchText);

  //   const handleSearch = (e) => {
  //     const val = e.target.value;
  //     // searchText = val;
  //     setSearchText(val);
  //     console.log(val);
  //   };

  //   let products = [];

  return (
    //circular braces should be in front of return
    //fragment
    <>
      <Navbar />
      <CategoryBar categories={categories} />
      <div style={customStyles}>
        <input type="text" onChange={getData} />
      </div>
      <h1>The Search text is : {searchText}</h1>
      <hr />
      <button onClick={getData}>Get Data</button>
      {products.map((elem) => {
        return (
          <div
            style={{
              width: "400px",
              backgroundColor: "yellow",
              margin: "24px auto",
            }}
          >
            <h2 key={elem.id}>{elem.title}</h2>
            <button
              onClick={() => {
                addToCart(elem);
              }}
            >
              Add to Cart
            </button>
          </div>
        );
      })}
    </>
  );
};

export default SearchPage;
