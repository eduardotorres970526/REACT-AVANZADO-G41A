import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button 
        onClick={() => addToCart(product)}
        className="add-to-cart-btn"
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ProductCard;