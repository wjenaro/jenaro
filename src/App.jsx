import './App.css';
import Header from './components/Header';
import Hero from './sections/Hero';
import Problem from './sections/Problem';
import Solution from './sections/Solution';
import Work from './sections/Work';
import Trust from './sections/Trust';
import CTA from './sections/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <Work />
      <Trust />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
