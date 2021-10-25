// import { useState } from "react";
import { useContext } from "react";
import CardComponent from "../components/CardComponent";
import { EcommerceContext } from "../context/EcommerceContext";
const ProductsContainer = () => {
  // const [cart, setCart] = useState([]);
  const {products, addCart} = useContext(EcommerceContext)  
  // console.log(cart);
  // const addToCart = (event, product) => console.log("se compro", product);
  return (
    <div className="container">
      <div className="row">
        {products.map((element) => {
          return (
            <CardComponent
              id={element.id}
              product={element}
              addToCart={addCart}
            />
          );
        })}
      </div>
    </div>
  );
};
export default ProductsContainer;
