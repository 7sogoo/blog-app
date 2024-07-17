import './App.css';
import { Carousel } from './components/Carousel/carousel';
import { Footer } from './components/Footer/footerApp';
import { Navbar } from './components/navbar';
import { Posts } from './components/Pos/postsApp';
import { Trending } from './components/Trending/trending';

function App() {
  return (
    <div>
      <Navbar/>
      <Carousel/>
      <Trending/>
      <Posts/>
      <Footer/>
    </div>
  );
}

export default App;
