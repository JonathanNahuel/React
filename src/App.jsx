import './App.css';
import ItemLists from './Components/ItemLists/ItemLists';
import './Components/NavBar/NavBar';
import NavBar from './Components/NavBar/NavBar';

function App() {
  let Estilos = { backgroundColor: "white" };

  return (
    <div style={Estilos} className="App">
      
      <ItemLists greeting =" BIENVENIDOS A JG INDUMENTARIA"/>
      <NavBar/>
     
    </div>
    
  );
}

export default App;

 