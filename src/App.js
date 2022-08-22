import './App.css';
import NavBar from "./components/NavBar/NavBar"
import {ItemListContainer} from "./components/ListProducts/ItemListContainer"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar></NavBar>
      </header>
      <ItemListContainer>
      </ItemListContainer>
    </div>
  );
}


export default App;
