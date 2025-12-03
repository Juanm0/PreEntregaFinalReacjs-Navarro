import { useNavigate } from 'react-router-dom';
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import { ShoppingBasket } from "lucide-react";

function ItemDetail({ product }) {
  const navigate = useNavigate();

  const navigateProductDetail = () => {
    navigate(`/product-detail/${product.id}`);
  };

  return (
    <div className="itemDetail">
      <h3 className="itemDetail-title">{product.title}</h3>
      <img src={product.image} alt={product.title} className="itemDetail-image" />
      <p className="itemDetail-description">{product.description}</p>

      <ItemCount stock={product.stock} />

      <span className="itemDetail-price">{product.price} $ ARG</span>

      <div className="itemDetail-buttons">
        <ButtonPrimary>
          <ShoppingBasket />
          Carrito
        </ButtonPrimary>

        <ButtonPrimary onClick={navigateProductDetail}>
          Detalle
        </ButtonPrimary>
      </div>
    </div>
  );
}

export default ItemDetail;
