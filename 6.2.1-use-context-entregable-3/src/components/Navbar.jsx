import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { totalItems } = useCart();

  return (
    <nav className="navbar">
      <h1>WALMART</h1>
      <div>
        <img src="https://tse1.mm.bing.net/th/id/OIP.lm8eKEGV8gIbnue6Cj8NXAHaIQ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" className='image-container' />
      </div>   
      <div className="cart-indicator">
        🛒 Carrito ({totalItems})
      </div>
    </nav>
  );
};

export default Navbar;