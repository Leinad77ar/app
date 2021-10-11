import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import CarrouselComponent from './components/CarrouselComponent';
import NavComponent from './components/NavComponent';
import ProductsContainer from './containers/ProductsContainer';
function App() {
  return (
    <div className="App">
      <NavComponent />
      <CarrouselComponent/>
      <ProductsContainer />
    </div>
  );
}

export default App;
