import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import { useCart } from '../../hooks/useCart';

function ItemDetail({ product }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const navigateProductDetail = () => {
    navigate(`/product-detail/${product.id}`);
  };

  const handleAdd = (quantity) => {
    addToCart(product, quantity);
    setAdded(true);
  };

  return (
    <div className="itemDetail">
      <h3 className="itemDetail-title">{product.title}</h3>
      <img src={product.image} alt={product.title} className="itemDetail-image" />
      <p className="itemDetail-description">{product.description}</p>
      <span className="itemDetail-price">{product.price} $ ARG</span>

      {product.stock === 0 ? (
        <p className="itemDetail-sin-stock">Sin stock</p>
      ) : added ? (
        <p className="itemDetail-agregado">Agregado al carrito ✓</p>
      ) : (
        <ItemCount stock={product.stock} onAdd={handleAdd} />
      )}

      <div className="itemDetail-buttons">
        <ButtonPrimary onClick={navigateProductDetail}>
          Ver detalle
        </ButtonPrimary>
      </div>
    </div>
  );
}

export default ItemDetail;
