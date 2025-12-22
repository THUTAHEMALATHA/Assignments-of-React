
import { Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import AboutUs from './AboutUs';
import Todos from './Todos';
import NotFound from './NotFound';

function App() {
  return (
    <div>
      <nav>
       <Link to="/home">Home</Link> |{" "}
       <Link to="/aboutus">AboutUs</Link> |{" "}
           <Link to="/todos">Todos</Link>

      </nav>
      <Routes>
        <Route path="/home" element={<Home /> } />
        <Route path="/aboutus" element={<AboutUs /> } />
        <Route path="/todos" element={<Todos /> } />
        <Route path="*" element={<NotFound /> } />

      </Routes>

    </div>
  );
}

export default App;