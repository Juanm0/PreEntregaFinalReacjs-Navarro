import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useCart } from "../hooks/useCart";
import ItemCount from "../components/ItemCount/ItemCount";
import "./ProductDetail.css";

function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    async function loadProduct() {
      try {
        setLoading(true);
        const ref = doc(db, "products", productId);
        const snapshot = await getDoc(ref);

        if (snapshot.exists()) {
          setProduct({ id: snapshot.id, ...snapshot.data() });
        } else {
          setProduct(null);
        }
      } catch (error) {
        console.error("Error al cargar el producto:", error);
      } finally {
        setLoading(false);
      }
    }

    loadProduct();
  }, [productId]);

  const handleAdd = (quantity) => {
    addToCart(product, quantity);
    setAdded(true);
  };

  if (loading) return <div className="skeleton-detail">Cargando...</div>;
  if (!product) return <h2>Producto no encontrado</h2>;

  return (
    <div className="product-detail">
      <img
        src={product.image}
        alt={product.title}
        className="product-detail-image"
      />

      <div className="product-detail-info">
        <h1>{product.title}</h1>
        <p className="description">{product.description}</p>
        <p className="price">{product.price} $ ARG</p>

        {product.stock === 0 ? (
          <p className="sin-stock">Sin stock disponible</p>
        ) : !added ? (
          <ItemCount stock={product.stock} onAdd={handleAdd} />
        ) : (
          <div className="added-confirmation">
            <p>¡Producto agregado al carrito!</p>
            <button className="btn-add" onClick={() => navigate("/cart-detail")}>
              Ir al carrito
            </button>
            <button className="btn-add" onClick={() => navigate("/")}>
              Seguir comprando
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductDetail;
