import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

// page components
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';

const App = () => {
  return (
    <div className="min-h-screen p-6 max-w-7xl mx-auto">
      <BrowserRouter>
        <nav className="mb-8 flex items-center space-x-6 ">
          <h1 className="font-bold text-xl mr-auto ">My Articles</h1>
          <NavLink exact activeClassName=" bg-slate-800 text-white" to="/">
            Home
          </NavLink>
          <NavLink activeClassName=" bg-slate-800 text-white" to="/about">
            About
          </NavLink>
          <NavLink activeClassName=" bg-slate-800 text-white" to="/contact">
            Contact
          </NavLink>
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
