/* import { createContext, useEffect, useState } from "react";

export const CartContext = createContext()

export default function CartProvider ({children}) {

    const [cart,setCart] = useState([])
    const [totalQuantity,setTotalQuantity] = useState(0)

    useEffect(()=>{
        setTotalQuantity(cart.reduce((acc,product) => acc + product.quantity,0) )
    },[cart])

    const addCartProduct = (newProduct) => {
        const productExist = cart.some(product => product.id === newProduct.id)

        if(productExist){
            setCart(cart.map(product =>{
                if(product.id === newProduct.id){
                    product.quantity = product.quantity + newProduct.quantity
                    return product
                }

                return product

            }))
            return
        }
        setCart([...cart,newProduct])
    }



   const  deleteCartProduct = (id) => {
        setCart(cart.filter(product => product.id !== id))
    }

    return (
        <CartContext.Provider value={{cart,totalQuantity, addCartProduct, deleteCartProduct}}>
            {children}
        </CartContext.Provider>
    )
} */

/* import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      const updated = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updated);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const cartQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, cartQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
 */

import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      const updated = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updated);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  
  const clearCart = () => {
    setCart([]);
  };

  
  const cartQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, cartQuantity, removeItem, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
