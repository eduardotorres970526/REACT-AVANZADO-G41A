import { useCart } from '../context/CartContext';

const Cart = () => {
  const { items, total, removeFromCart, updateQuantity, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="cart">
        <h2>Carrito de Compras</h2>
        <p>Tu carrito está vacío</p>
      </div>
    );
  }

  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      
      {items.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} width="50" />
          <div className="item-info">
            <h4>{item.name}</h4>
            <p>${item.price} c/u</p>
          </div>
          
          <div className="quantity-controls">
            <button 
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              disabled={item.quantity <= 1}
            >
              -
            </button>
            <span>{item.quantity}</span>
            <button 
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
          </div>

          <p>${(item.price * item.quantity).toFixed(2)}</p>
          
          <button 
            onClick={() => removeFromCart(item.id)}
            className="remove-btn"
          >
            ❌
          </button>
        </div>
      ))}

      <div className="cart-total">
        <h3>Total: ${total.toFixed(2)}</h3>
        <button onClick={clearCart} className="clear-btn">
          Vaciar Carrito
        </button>
        <button className="checkout-btn">
          Finalizar Compra
        </button>
      </div>
    </div>
  );
};

export default Cart;