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

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseconfig";

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
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} width={300} />
      <p>{product.description}</p>
      <p>Precio: {product.price} $ ARG</p>
    </div>
  );
}

export default ProductDetail;
