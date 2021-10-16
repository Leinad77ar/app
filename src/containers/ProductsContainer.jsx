import {useState, useEffect} from "react"
import CardComponent from "../components/CardComponent";
const ProductsContainer = () => {
    const [cart, setCart] = useState ([]);
    const [products, setProducts] = useState([]);
    useEffect(async () => {
        let data = await fetch("https://api.mercadolibre.com/sites/MLA/search?q=remeras estampadas");
        let response = await data.json();
        console.log(response.results);
    })
    return (
        <div className="container">
            <div className="row">
                <CardComponent title={"Tiger Tank"} img="https://upload.wikimedia.org/wikipedia/commons/6/6e/Bundesarchiv_Bild_101I-299-1805-16%2C_Nordfrankreich%2C_Panzer_VI_%28Tiger_I%29_cropped.jpg"/>
                <CardComponent title={"Tiger Tank"} img="https://upload.wikimedia.org/wikipedia/commons/6/6e/Bundesarchiv_Bild_101I-299-1805-16%2C_Nordfrankreich%2C_Panzer_VI_%28Tiger_I%29_cropped.jpg"/>
                <CardComponent title={"Tiger Tank"} img="https://upload.wikimedia.org/wikipedia/commons/6/6e/Bundesarchiv_Bild_101I-299-1805-16%2C_Nordfrankreich%2C_Panzer_VI_%28Tiger_I%29_cropped.jpg"/>
                <CardComponent title={"Tiger Tank"} img="https://upload.wikimedia.org/wikipedia/commons/6/6e/Bundesarchiv_Bild_101I-299-1805-16%2C_Nordfrankreich%2C_Panzer_VI_%28Tiger_I%29_cropped.jpg"/>
                <CardComponent title={"Tiger Tank"} img="https://upload.wikimedia.org/wikipedia/commons/6/6e/Bundesarchiv_Bild_101I-299-1805-16%2C_Nordfrankreich%2C_Panzer_VI_%28Tiger_I%29_cropped.jpg"/>
                <CardComponent title={"Tiger Tank"} img="https://upload.wikimedia.org/wikipedia/commons/6/6e/Bundesarchiv_Bild_101I-299-1805-16%2C_Nordfrankreich%2C_Panzer_VI_%28Tiger_I%29_cropped.jpg"/>
            </div>
        </div>
    )
}
export default ProductsContainer;