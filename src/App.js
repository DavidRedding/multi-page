import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

// page components
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';

const App = () => {
  return (
    <div className="min-h-screen p-6 max-w-7xl mx-auto">
      <BrowserRouter>
        <nav className="mb-8 flex justify-between">
          <h1 className="font-bold text-xl ">My Articles</h1>
          <div className="flex justify-between underline w-1/3 text-gray-800">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
