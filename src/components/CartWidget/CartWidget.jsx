/* import { NavLink } from 'react-router'
import './CartWidget.css'
import { ShoppingCart } from 'lucide-react'

function CartWidget () {
    return (<button className='cartWidget'>
                <NavLink to="/cart-detail"><ShoppingCart className='shoppingCart' /></NavLink>
            </button>)
}

export default CartWidget */
import { NavLink } from 'react-router'
import { ShoppingCart } from "lucide-react";
import { useCart } from "../../context/CartContext";
import './CartWidget.css'

function CartWidget() {
    const { cartQuantity } = useCart();

    return (
        <div className="cart-widget">
            <button className='btn-cartWidget'>
                <NavLink to="/cart-detail"><ShoppingCart className='shoppingCart' size={30}/></NavLink>
                {cartQuantity > 0 && <span className="cart-badge">{cartQuantity}</span>}
            </button>

        </div>
    );
}

export default CartWidget;
