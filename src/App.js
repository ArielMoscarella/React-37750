import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/Navbar/ItemListContainer';
import ItemCount from './components/Navbar/ItemCount';



function App() {
 

  return (
    <div>
      <Navbar/>
      <ItemListContainer title="Producto" subtitle="Nombre" especifications="Datos" price={3000}/>
    </div>
  );
}

export default App;
