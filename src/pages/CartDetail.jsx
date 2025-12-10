
import { useCart } from "../context/CartContext";

function CartDetail() {
  const { cart, removeItem, clearCart, cartQuantity } = useCart();

  if (cartQuantity === 0) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Carrito</h2>
        <p>Tu carrito está vacío.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Carrito</h2>

      {cart.map((product) => (
        <div
          key={product.id}
          style={{
            display: "flex",
            alignItems: "center",
            borderBottom: "1px solid #ccc",
            padding: "10px 0"
          }}
        >
          <img
            src={product.image}
            alt={product.title}
            style={{ width: "80px", marginRight: "15px" }}
          />

          <div style={{ flex: 1 }}>
            <h3>{product.title}</h3>
            <p>Precio: ${product.price}</p>
            <p>Cantidad: {product.quantity}</p>
          </div>

          <button
            onClick={() => removeItem(product.id)}
            style={{
              background: "red",
              color: "white",
              border: "none",
              padding: "8px 12px",
              cursor: "pointer"
            }}
          >
            Eliminar
          </button>
        </div>
      ))}

      <button
        onClick={clearCart}
        style={{
          marginTop: "20px",
          background: "#444",
          color: "white",
          padding: "12px 16px",
          border: "none",
          cursor: "pointer"
        }}
      >
        Vaciar carrito
      </button>
    </div>
  );
}

export default CartDetail;
