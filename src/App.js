import 'bootstrap/dist/css/bootstrap.min.css';
import SellerForm from './components/sellerForm';
import SellerPage from './components/sellerPage';
import CartModal from './components/cartModal';

function App() {
  return (
    <div className="App">
      <CartModal />
      <SellerForm />
      <SellerPage />
      
    </div>
  );
}

export default App;
