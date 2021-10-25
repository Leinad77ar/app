import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import CarrouselComponent from './components/CarrouselComponent';
import NavComponent from './components/NavComponent';
import ProductsContainer from './containers/ProductsContainer';
import { EcommerceProvider } from './context/EcommerceContext';
function App() {
  return (
    <div className="App">
      <EcommerceProvider>
      <NavComponent />
      <CarrouselComponent/>
      <ProductsContainer />
      </EcommerceProvider>
    </div>
  );
}

export default App;
