import { NavLink } from 'react-router-dom';
import { ShoppingCart } from "lucide-react";
import { useCart } from "../../hooks/useCart";
import './CartWidget.css';

function CartWidget() {
    const { cartQuantity } = useCart();

    return (
        <div className="cart-widget">
            <button className='btn-cartWidget'>
                <NavLink to="/cart-detail"><ShoppingCart className='shoppingCart' size={30} /></NavLink>
                {cartQuantity > 0 && <span className="cart-badge">{cartQuantity}</span>}
            </button>
        </div>
    );
}

export default CartWidget;
