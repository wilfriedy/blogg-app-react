import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// import pages
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import Details from "./pages/details/Details";
import Search from "./pages/search/Search";
import Navbar from "./components/Nav";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="app-body">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/search" element={<Search />} />
            <Route path="/articles/:id" element={<Details />} />
          </Routes>
        </div>
      </BrowserRouter>
      <header className="App-header"></header>
    </div>
  );
}

export default App;
