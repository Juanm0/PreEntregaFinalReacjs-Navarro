/* import { NavLink } from 'react-router'
import './CartWidget.css'
import { ShoppingCart } from 'lucide-react'

function CartWidget () {
    return (<button className='cartWidget'>
                <NavLink to="/cart-detail"><ShoppingCart className='shoppingCart' /></NavLink>
            </button>)
}

export default CartWidget */

import { ShoppingCart } from "lucide-react";
import { useCart } from "../../context/CartContext";
import './CartWidget.css'

function CartWidget() {
  const { cartQuantity } = useCart();

  return (
    <div className="cart-widget">
      <ShoppingCart size={30} color="white" />
      {cartQuantity > 0 && <span className="cart-badge">{cartQuantity}</span>}
    </div>
  );
}

export default CartWidget;
