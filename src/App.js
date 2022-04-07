import { BrowserRouter, Route } from 'react-router-dom';

// page components
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';

const App = () => {
  return (
    <div className="min-h-screen p-6 max-w-7xl mx-auto">
      <BrowserRouter>
        <nav>
          <h1 className="font-bold text-xl mb-8">My Articles</h1>
        </nav>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </BrowserRouter>
    </div>
  );
};

export default App;
