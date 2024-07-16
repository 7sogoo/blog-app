import './App.css';
import { Carusel } from './components/carousel';
import { Navbar } from './components/navbar';
import { Trending } from './components/trending';

function App() {
  return (
    <div>
      <Navbar/>
      <Carusel/>
      <Trending/>
    </div>
  );
}

export default App;
