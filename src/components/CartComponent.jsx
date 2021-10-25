import { useContext } from "react/cjs/react.development"
import { EcommerceContext } from "../context/EcommerceContext"
import cartsvg from "./cart.svg"
export const CartComponent = () => {
    const {cart} = useContext(EcommerceContext);
    return (
        <div>
            <img src={cartsvg} alt="" srcSet="" />
            <p>({cart.length})</p>
            </div>
    )
}
