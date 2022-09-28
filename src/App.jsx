import './App.css';
import ItemListsContainer from './Components/ItemListsContainer/ItemListsContainer';
import NavBar from './Components/NavBar/NavBar';

function App() {
  let Estilos = { backgroundColor: "white" };

  return (
    <div style={Estilos} className="App">
     
      <NavBar img = "https://t4.ftcdn.net/jpg/03/02/36/77/360_F_302367759_jc6h3Lnh5gKdGyakonxqLoifehe5Mz0w.jpg" />
      <ItemListsContainer greeting =" BIENVENIDOS A JG INDUMENTARIA"/>
      
     
    </div>
    
  );
}

export default App;

 