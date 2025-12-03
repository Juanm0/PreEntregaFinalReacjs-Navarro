import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemListContainer.css';

function ItemListContainer() {
  const { categoriaId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await fetch('/products.json');
        const data = await response.json();

  
        const filtered = categoriaId
          ? data.filter((product) => product.category === categoriaId)
          : data;

        setProducts(filtered);
      } catch (error) {
        console.error('Error al cargar los productos:', error);
      } finally {
        setLoading(false);
      }
    })();
  }, [categoriaId]);

  if (loading) {
    return <p className="loading">Cargando productos...</p>;
  }

  return (
    <div className="itemListContainer">
      {products.length > 0 ? (
        products.map((product) => (
          <ItemDetail key={product.id} product={product} />
        ))
      ) : (
        <p>No hay productos en esta categoría.</p>
      )}
    </div>
  );
}

export default ItemListContainer;
