# Nike Store — E-commerce con React + Firebase

Pre-entrega final del curso de React de Coderhouse. Es una Single Page
Application de e-commerce (temática indumentaria/calzado deportivo) construida
con React, React Router y Context API, con Firebase Firestore como base de
datos para el catálogo de productos y las órdenes de compra.

## Funcionalidades

- Catálogo de productos leído en tiempo real desde Firestore, con filtro por
  categoría (`/categoria/:categoriaId`).
- Vista de detalle de cada producto (`/product-detail/:id`).
- Selector de cantidad (`ItemCount`) con validación de stock, tanto en el
  listado como en el detalle del producto.
- Carrito de compras global manejado con React Context (`CartContext`),
  con cantidades, subtotales por producto y total final.
- Checkout con formulario de datos del comprador (nombre, email, teléfono) que:
  - Valida los campos antes de confirmar.
  - Genera un documento en la colección `orders` de Firestore con los datos
    del comprador, los productos comprados, cantidades, precio total y fecha.
  - Descuenta el stock comprado de cada producto en Firestore.
  - Muestra al usuario el ID de la orden generada al finalizar la compra.
- Loaders y estados vacíos (carrito vacío, sin stock, producto no encontrado,
  página 404).
- Navegación 100% client-side con React Router (sin recargar el navegador).

## Estructura de componentes

```
App
├── NavBar
│    └── CartWidget
├── ItemListContainer
│    └── ItemDetail (tarjeta de producto en el listado)
│         └── ItemCount
├── ProductDetail (página de detalle)
│    └── ItemCount
├── CartDetail (página del carrito)
└── Checkout (página)
     └── CheckoutForm
```

## Tecnologías

- [React 19](https://react.dev/)
- [React Router DOM v7](https://reactrouter.com/)
- [Firebase / Firestore](https://firebase.google.com/) para persistencia de
  productos y órdenes.
- [Vite](https://vite.dev/) como bundler.
- [lucide-react](https://lucide.dev/) para los íconos.

## Instalación y uso local

1. Cloná el repositorio e instalá las dependencias:

   ```bash
   git clone https://github.com/Juanm0/PreEntregaFinalReacjs-Navarro.git
   cd PreEntregaFinalReacjs-Navarro
   npm install
   ```

2. Creá un archivo `.env` en la raíz del proyecto (podés copiar
   `.env.example`) con tus propias credenciales de Firebase:

   ```
   VITE_FIREBASE_API_KEY=
   VITE_FIREBASE_AUTH_DOMAIN=
   VITE_FIREBASE_PROJECT_ID=
   VITE_FIREBASE_STORAGE_BUCKET=
   VITE_FIREBASE_MESSAGING_SENDER_ID=
   VITE_FIREBASE_APP_ID=
   ```

   Estas credenciales se obtienen desde la consola de Firebase, en la
   configuración del proyecto.

3. En Firestore, creá una colección `products` con documentos que tengan al
   menos estos campos: `title`, `description`, `price`, `image`, `stock` y
   `category`. La colección `orders` se crea sola, automáticamente, la primera
   vez que se confirma una compra.

4. Corré el proyecto en modo desarrollo:

   ```bash
   npm run dev
   ```

5. Para generar el build de producción:

   ```bash
   npm run build
   npm run preview
   ```

## Autor

Proyecto realizado por Navarro, Juan M. como pre-entrega final del curso de
React de Coderhouse.
