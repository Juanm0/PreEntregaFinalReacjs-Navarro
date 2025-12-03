import { NavLink } from 'react-router'
import './CartWidget.css'
import { ShoppingCart } from 'lucide-react'

function CartWidget () {
    return (<button className='cartWidget'>
                <NavLink to="/cart-detail"><ShoppingCart className='shoppingCart' /></NavLink>
            </button>)
}

export default CartWidget