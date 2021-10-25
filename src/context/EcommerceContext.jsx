const { createContext, useState, useEffect } = require("react");

export const EcommerceContext = createContext();
export const EcommerceProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const fetchData = async (query) => {
        // alert(`Se cargara la busqueda de ${query}`)
        let data = await fetch(
          `https://api.mercadolibre.com/sites/MLA/search?q=${query}`
        );
        let response = await data.json();
        setProducts(response.results);
        // console.log(response.results);
        }
    const addCart = (product) => {
        cart.push(product);
        setCart([...cart]);
        alert(`Se agrego al carrito: ${product.title}`)
    }
    useEffect(() => {        
        fetchData("remeras metal");
    }, []);
    return (
        <EcommerceContext.Provider value={{products, cart, addCart, fetchData}} >
            {children}
        </EcommerceContext.Provider>
    )
}
