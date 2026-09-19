import { NavLink} from "react-router";
import AppRoutes from './routes/AppRoutes';

const App = () => {

  return (
    <div className="h-screen p-2">
      <nav className="flex items-center justify-between mb-4 bg-yellow-200 h-10 p-3">
        <h1>Logo</h1>

        <div className="flex items-center gap-6 justify-between">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        <button>Login</button>
      </nav>

      <AppRoutes />

    </div>
  );
};

export default App;
