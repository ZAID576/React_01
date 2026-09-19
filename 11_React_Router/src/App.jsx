import Home from './pages/Home';
import Contact from './pages/contact';
import About from './pages/About';
import { NavLink, Route, Routes } from "react-router";

const App = () => {

  return (
    <div className="h-screen p-2">
      <nav className="flex items-center justify-between mb-4">
        <h1>Logo</h1>

        <div className="flex items-center gap-6 justify-between">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        <button>Login</button>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
