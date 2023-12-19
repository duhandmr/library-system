import Books from "./components/books/Books";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Favorites from "./components/favorites/Favorites";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <div>
        <div className="flex flex-col gap-5">
          <Routes>
            <Route path="/" element={<Books />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
