import { useState, useEffect } from "react";
import CardComponent from "../components/CardComponent";
const ProductsContainer = () => {
  //   const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(async () => {
    let data = await fetch(
      "https://api.mercadolibre.com/sites/MLA/search?q=celulares samsung"
    );
    let response = await data.json();
    setProducts(response.results);
    console.log(response.results);
  }, []);
  const addToCart = (event, product) => console.log("se compro", product);
  return (
    <div className="container">
      <div className="row">
        {products.map((element) => {
          return (
            <CardComponent
              key={element.id}
              product={element}
              addToCart={addToCart}
            />
          );
        })}
      </div>
    </div>
  );
};
export default ProductsContainer;
