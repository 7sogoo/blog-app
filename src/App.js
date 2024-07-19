import './App.css';
import { NotFound } from './components/404/notFound';
import { BlogApp } from './components/Blog/blogApp';
import { CarouselApp } from './components/Carousel/carousel';;
import { ContactUs } from './components/ContactUs/contactUs';
import { Footer } from './components/Footer/footerApp';
import { Navbar } from './components/navbar';
import { Posts } from './components/Pos/postsApp';
import { Trending } from './components/Trending/trending';

function App() {
  return (
    <div>
      <Navbar/>
      <CarouselApp/>
      <Trending/>
      <Posts/>
      <Footer/>
      <NotFound/>
      <ContactUs/>
      <BlogApp/>
    </div>
  );
}

export default App;
