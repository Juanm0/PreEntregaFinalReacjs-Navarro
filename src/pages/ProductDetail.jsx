/* import { useEffect, useState } from "react"
import { useParams } from "react-router"

function ProductDetail () {

    const {productId} = useParams()
    const [product, setProduct] = useState({})

    useEffect(()=>{
        (async()=>{
            try {
                const response = await fetch('/products.json')
                const products = await response.json()
                const productFind = products.find(product => product.id == productId)
                setProduct(productFind)
            } catch (error) {
                console.log(error)
            }
        })()
    },[productId])


    return (
        <div>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
        </div>
    )
}

export default ProductDetail */

/* import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseconfig";
import './ProductDetail.css';

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProduct() {
      try {
        const ref = doc(db, "products", productId);
        const snapshot = await getDoc(ref);

        if (snapshot.exists()) {
          setProduct({ id: snapshot.id, ...snapshot.data() });
        } else {
          console.log("Producto no encontrado en Firebase");
          setProduct(null);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    loadProduct();
  }, [productId]);

  if (loading) return <h2>Cargando...</h2>;
  if (!product) return <h2>Producto no encontrado</h2>;

 
  return (
  <div className="product-detail">
    <img src={product.image} alt={product.title} className="product-detail-image" />

    <div className="product-detail-info">
      <h1>{product.title}</h1>
      <p className="description">{product.description}</p>
      <p className="price">{product.price} $ ARG</p>
    </div>
  </div>
);

}

export default ProductDetail; */

import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseconfig";
import { useCart } from "../context/CartContext";
import "./ProductDetail.css";

function ProductDetail() {
  const { productId } = useParams();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    async function loadProduct() {
      try {
        const ref = doc(db, "products", productId);
        const snapshot = await getDoc(ref);

        if (snapshot.exists()) {
          setProduct({ id: snapshot.id, ...snapshot.data() });
        } else {
          setProduct(null);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    loadProduct();
  }, [productId]);

  const handleAdd = () => {
    addToCart({ ...product, quantity: qty });
  };

  if (loading) return <div className="skeleton-detail"></div>;
  if (!product) return <h2>Producto no encontrado</h2>;

  return (
    <div className="product-detail">


    
      <img src={product.image} alt={product.title} className="product-detail-image" />

      
      <div className="product-detail-info">

        <h1>{product.title}</h1>
        <p className="description">{product.description}</p>

        <p className="price">{product.price} $ ARG</p>

        
        <div className="qty-selector">
          <button onClick={() => qty > 1 && setQty(qty - 1)}>-</button>
          <span>{qty}</span>
          <button onClick={() => qty < product.stock && setQty(qty + 1)}>+</button>
        </div>

        <button className="btn-add" onClick={handleAdd}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;

