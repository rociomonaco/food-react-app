import './App.css';
import NavBar from "./components/NavBar/NavBar"
import {ItemListContainer} from "./components/ListProducts/ItemListContainer"
import {ItemDetailContainer} from "./components/DetailProduct/ItemsDetailContainer"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <ItemListContainer/>
      <ItemDetailContainer/>
    </div>
  );
}


export default App;
