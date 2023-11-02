
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Header/Navbar';
import RouteComp from './routing/RouteComp';

function App() {
  return (
    <div className="App">
      <Navbar/>
    <RouteComp/>
    <Footer/>
    </div>
  );
}

export default App;
