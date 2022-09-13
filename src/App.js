import './App.css';
import NavBar from "./components/NavBar/NavBar"
import {ItemListContainer} from "./components/ListProducts/ItemListContainer"
import {ItemDetailContainer} from "./components/DetailProduct/ItemsDetailContainer"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {CartProvider} from "./context/CartContext"
import { CartContainer } from './components/Cart/CartContainer';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">

          <Routes>
            {/* renderiza lo que esta en element */}
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="products" element={<ItemListContainer/>}/>
            <Route path="products/:typeOfProduct" element={<ItemListContainer/>}/>
            <Route path="product/:id" element={<ItemDetailContainer/>}/>
            <Route path="cart" element={<CartContainer/>}/>
            {/* ruta que no establecemos error */}
            <Route path="*" element={<ItemListContainer/>}/>
          </Routes>
          <header className="App-header">
            <NavBar/>
          </header>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}


export default App;
