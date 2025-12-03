
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Products() {
  const { categoriaId } = useParams(); 
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

  
    setTimeout(() => {
      const allProducts = [
        { id: 1, nombre: 'Remera Nike', categoria: 'remeras' },
        { id: 2, nombre: 'Gorra Jordan', categoria: 'gorras' },
        { id: 3, nombre: 'Zapatilla Air Max', categoria: 'zapatillas' },
      ];

      const filtrados = categoriaId
        ? allProducts.filter(p => p.categoria === categoriaId)
        : allProducts;

      setProductos(filtrados);
      setLoading(false);
    }, 800);
  }, [categoriaId]); 

  if (loading) return <h2>Cargando productos...</h2>;

  return (
    <div>
      <h2>{categoriaId ? `Categoría: ${categoriaId}` : 'Todos los productos'}</h2>
      <ul>
        {productos.map(p => (
          <li key={p.id}>{p.nombre}</li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
