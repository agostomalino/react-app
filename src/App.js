import './App.css';
import NavBar from './components/menu/NavBar';
import  Footer from './components/Footer';
import ItemListContainer from './components/menu/ItemListContainer';


function App() {
  return (
    <main>
      <NavBar textoDeLogo={"Kumo dibujos"}/> {/* si paso como valor un boolean si o si debe estar entre brackets */}
      <ItemListContainer greeting={"Camisa tiger"}/>
      <Footer/>
    </main>  
    
  );
}

export default App;
