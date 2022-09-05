import './App.css';
import NavBar from "./components/NavBar/NavBar"
import {ItemListContainer} from "./components/ListProducts/ItemListContainer"
import {ItemDetailContainer} from "./components/DetailProduct/ItemsDetailContainer"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {CartFilter} from "./components/CartFilter/CartFilter"


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <CartFilter/>

        <Routes>
          {/* renderiza lo que esta en element */}
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="products" element={<ItemListContainer/>}/>
          <Route path="products/:typeOfProduct" element={<ItemListContainer/>}/>
          <Route path="product/:id" element={<ItemDetailContainer/>}/>
          {/* ruta que no establecemos error */}
          <Route path="*" element={<ItemListContainer/>}/>
        </Routes>
        <header className="App-header">
          <NavBar/>
        </header>
      </div>
    </BrowserRouter>
  );
}


export default App;
