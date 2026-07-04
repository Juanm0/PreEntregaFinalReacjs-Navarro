import { useNavigate } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import "./CartDetail.css";

function CartDetail() {
  const { cart, removeItem, clearCart, updateQuantity, cartQuantity, cartTotal } =
    useCart();
  const navigate = useNavigate();

  if (cartQuantity === 0) {
    return (
      <div className="cart-detail">
        <h2>Carrito</h2>
        <p>Tu carrito está vacío.</p>
        <button className="btn-seguir" onClick={() => navigate("/")}>
          Ver productos
        </button>
      </div>
    );
  }

  return (
    <div className="cart-detail">
      <h2>Carrito</h2>

      {cart.map((product) => (
        <div key={product.id} className="cart-item">
          <img src={product.image} alt={product.title} className="cart-item-image" />

          <div className="cart-item-info">
            <h3>{product.title}</h3>
            <p>Precio unitario: ${product.price}</p>

            <div className="cart-item-qty">
              <button
                onClick={() => updateQuantity(product.id, product.quantity - 1)}
                disabled={product.quantity <= 1}
              >
                -
              </button>
              <span>{product.quantity}</span>
              <button
                onClick={() => updateQuantity(product.id, product.quantity + 1)}
                disabled={product.stock ? product.quantity >= product.stock : false}
              >
                +
              </button>
            </div>

            <p className="cart-item-subtotal">
              Subtotal: ${(product.price * product.quantity).toFixed(2)}
            </p>
          </div>

          <button className="btn-eliminar" onClick={() => removeItem(product.id)}>
            Eliminar
          </button>
        </div>
      ))}

      <div className="cart-summary">
        <h3>Total: ${cartTotal.toFixed(2)}</h3>

        <div className="cart-summary-buttons">
          <button className="btn-vaciar" onClick={clearCart}>
            Vaciar carrito
          </button>
          <button className="btn-checkout" onClick={() => navigate("/checkout")}>
            Finalizar compra
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartDetail;
