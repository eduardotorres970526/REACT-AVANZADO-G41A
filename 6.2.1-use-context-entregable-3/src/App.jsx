import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import './App.css';

// Datos de ejemplo
const products = [
  { id: 1, name: 'Laptop', price: 999.99, image: 'https://th.bing.com/th/id/R.aeee90e40a72fa2e3092156190cbba6f?rik=irj%2fll2p%2fM8z0A&pid=ImgRaw&r=0' },
  { id: 2, name: 'Smartphone', price: 499.99, image: 'https://www.idcmayoristas.com/wp-content/uploads/2023/05/Celular-Honor-X7a-Rky-lx3-bk-007024.png' },
  { id: 3, name: 'Headphones', price: 99.99, image: 'https://http2.mlstatic.com/audifonos-beats-pro-over-ear-headphone-todos-los-colores-D_NQ_NP_16804-MLM20128406016_072014-F.jpg' },
  { id: 4, name: 'Tablet', price: 299.99, image: 'https://tse3.mm.bing.net/th/id/OIP.kWJHtoRAAPMp0Zi1VbJSyQHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3' }
];

function App() {
  return (
    <div className="app">
      <Navbar />
      
      <div className="main-content">
        <div className="products-section">
          <h2>Productos</h2>
          <div className="products-grid">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        <div className="cart-section">
          <Cart />
        </div>
      </div>
    </div>
  );
}

export default App;