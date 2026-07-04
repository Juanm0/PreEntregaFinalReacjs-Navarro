import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { collection, addDoc, doc, updateDoc, increment } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useCart } from "../hooks/useCart";
import CheckoutForm from "../components/CheckoutForm/CheckoutForm";
import "./Checkout.css";

function Checkout() {
  const { cart, cartQuantity, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [orderId, setOrderId] = useState(null);

  const handleConfirm = async (buyer) => {
    setLoading(true);
    setError(null);

    try {
      const order = {
        buyer,
        items: cart.map((item) => ({
          id: item.id,
          title: item.title,
          price: item.price,
          quantity: item.quantity,
        })),
        total: cartTotal,
        date: new Date().toISOString(),
      };

      const ordersCollection = collection(db, "orders");
      const orderDoc = await addDoc(ordersCollection, order);

      // Descuenta el stock de cada producto comprado.
      await Promise.all(
        cart.map((item) =>
          updateDoc(doc(db, "products", item.id), {
            stock: increment(-item.quantity),
          }).catch((err) =>
            console.error(`No se pudo actualizar el stock de ${item.title}`, err)
          )
        )
      );

      setOrderId(orderDoc.id);
      clearCart();
    } catch (err) {
      console.error("Error al generar la orden:", err);
      setError("Ocurrió un error al procesar la compra. Intentá de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  if (orderId) {
    return (
      <div className="checkout-page">
        <div className="order-success">
          <h2>¡Gracias por tu compra!</h2>
          <p>Tu orden se generó correctamente.</p>
          <p className="order-id">
            N° de orden: <strong>{orderId}</strong>
          </p>
          <button className="btn-confirmar" onClick={() => navigate("/")}>
            Volver al inicio
          </button>
        </div>
      </div>
    );
  }

  if (cartQuantity === 0) {
    return (
      <div className="checkout-page">
        <p>Tu carrito está vacío, no hay nada para comprar.</p>
        <Link to="/">Ver productos</Link>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="checkout-summary">
        <h2>Resumen del pedido</h2>
        {cart.map((item) => (
          <div key={item.id} className="checkout-summary-item">
            <span>
              {item.title} x {item.quantity}
            </span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
        <div className="checkout-summary-total">
          <strong>Total: ${cartTotal.toFixed(2)}</strong>
        </div>
      </div>

      <CheckoutForm onSubmit={handleConfirm} loading={loading} />

      {error && <p className="form-error">{error}</p>}
    </div>
  );
}

export default Checkout;
