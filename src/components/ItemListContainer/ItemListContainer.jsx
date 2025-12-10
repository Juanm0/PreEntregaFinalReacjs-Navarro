import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemListContainer.css';

import { app } from '../../firebaseConfig';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

function ItemListContainer() {
  const { categoriaId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);

     
        const db = getFirestore(app);
        const productsCollection = collection(db, 'products');
        const snapshot = await getDocs(productsCollection);

  
        let data = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        if (categoriaId) {
          data = data.filter(product => product.category === categoriaId);
        }

        setProducts(data);

      } catch (error) {
        console.error('Error al cargar los productos desde Firebase:', error);
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
