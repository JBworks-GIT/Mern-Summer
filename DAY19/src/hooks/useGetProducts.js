import { useContext, useEffect, useState } from "react";
import AppContext from "../context/appContext";

const useGetProducts = (params = {}) => {
  const { isSearchTextDependent = true } = params;
  const { searchText } = useContext(AppContext);
  const [products, setProducts] = useState([]);

  async function getData(stx) {
    //no need to pass event react already passes it
    // const val = e.target.value;
    const res = await fetch(`https://dummyjson.com/products/search?q=${stx}`);
    const data = await res.json();
    // products = data.products;
    setProducts(data.products);
  }

  useEffect(() => {
    if (isSearchTextDependent) {
      getData(searchText);
    } else {
      getData("");
    }
  }, [searchText]);

  return products;
};

export default useGetProducts;
