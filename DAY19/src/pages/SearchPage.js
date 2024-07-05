import { useEffect, useState } from "react";
import CategoryBar from "../components/categoryBar";
import Navbar from "../components/navbar";

const SearchPage = (props) => {
  const [products, setProducts] = useState([]);
  const { categories ,setSearchText ,searchText} = props;

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
  
  
  async function getData() {
    //no need to pass event react already passes it
    // const val = e.target.value;
    const res = await fetch(`https://dummyjson.com/products/search?q=${searchText}`);
    const data = await res.json();
    // products = data.products;
    setProducts(data.products);
  }

  useEffect(()=>{getData()},[searchText])

  return (
    //circular braces should be in front of return
    //fragment
    <>
      <Navbar setSearchText={setSearchText}/>
      <CategoryBar categories={categories} />
      <div style={customStyles}>
        <input type="text" onChange={getData} />
      </div>
      <h1>The Search text is : {searchText}</h1>
      <hr />
      <button onClick={getData}>Get Data</button>
      {products.map((elem) => {
        return <p>{elem.title}</p>;
      })}
    </>
  );
};

export default SearchPage;
