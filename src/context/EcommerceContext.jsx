const { createContext, useState, useEffect } = require("react");

export const EcommerceContext = createContext();
export const EcommerceProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const addCart = (product) => {
        cart.push(product);
        setCart([...cart]);
        alert(`Se agrego al carrito: ${product.title}`)
    }
    useEffect(() => {
        async function fetchData() {
        let data = await fetch(
          "https://api.mercadolibre.com/sites/MLA/search?q=remeras metal"
        );
        let response = await data.json();
        setProducts(response.results);
        // console.log(response.results);
        }
        fetchData();
    }, []);
    return (
        <EcommerceContext.Provider value={{products, cart, addCart}} >
            {children}
        </EcommerceContext.Provider>
    )
}
